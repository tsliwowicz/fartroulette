package org.gamejam.gc.fartroulette;

/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.log4j.Logger;
import org.gamejam.gc.fartroulette.model.ModelClasses.ElevatorData;
import org.gamejam.gc.fartroulette.model.ModelClasses.UserData;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.util.concurrent.GlobalEventExecutor;

@SuppressWarnings("unused")

public class WebSocketFrameHandler extends SimpleChannelInboundHandler<TextWebSocketFrame> {
	private static final Logger s_logger = Logger.getLogger(WebSocketFrameHandler.class);
	private static AtomicInteger sid = new AtomicInteger();
	private ChannelHandlerContext myCtx;
	private int lsid = -1;
	private ChannelGroup allchannels;
	private ElevatorData elevatorData;
	
	
	public WebSocketFrameHandler(ChannelGroup allchannels, ElevatorData elevatorData) {
		this.allchannels = allchannels;
		this.elevatorData = elevatorData;
	}


	@Override
    protected void channelRead0(ChannelHandlerContext ctx, TextWebSocketFrame frame) throws Exception {
		String request = frame.text();
		s_logger.debug("received "+request);
		
		String[] split = request.split("\\?");
		if (split.length != 2) {
			s_logger.error("received request without parameters "+request);
			return;
		}
		
		String[] params = split[1].split("&");
		Map<String, String> paramsMap = new HashMap<String, String>();
		
		for (String p: params) {
			String[] psplit = p.split("=");
			if (psplit.length != 2) {
				s_logger.error("bad parameter");
				continue;
			}
			paramsMap.put(psplit[0], psplit[1]);
		}
		
		s_logger.debug(paramsMap.toString());
		
		if (request.startsWith("LOGIN?")) {
			String id = paramsMap.get("id");
			String name = paramsMap.get("name");
			String image = paramsMap.get("image");
			
			UserData userData = elevatorData.activeUsers.get(id);
			if (userData == null) {
				userData = new UserData(id, name, image);
				elevatorData.activeUsers.put(id, userData);
			}
			
		} else if (request.startsWith("VOTE?")) {
			String id = paramsMap.get("uid");
			String voted = paramsMap.get("voted");
			
			UserData userData = elevatorData.activeUsers.get(id);
			if (userData == null) {
				s_logger.error("not logged in "+id);
			}
			userData.bets.clear();
			userData.bets.put(voted, 1);
		}
		
		//elevatorData.activeUsers.get(arg0)
		
		//LOGIN?name=Tal Sliwowicz&id=643288372&image=http://graph.facebook.com/643288372/picture
		//VOTE?voted=slot2&uid=643288372
				
        /*String request = frame.text();
        ctx.channel().writeAndFlush(new TextWebSocketFrame(request.toUpperCase()));*/
        
    }
	

	@Override
	public void channelActive(ChannelHandlerContext ctx) throws Exception {
		
		lsid = sid.incrementAndGet();
		s_logger.info("channelActive "+lsid);
		myCtx = ctx;
		allchannels.add(ctx.channel());
		super.channelActive(ctx);
	}

	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
		s_logger.info("channelInactive "+lsid);
		myCtx = null;
		lsid = -1;
		super.channelInactive(ctx);
	}
	
	
	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
			throws Exception {
		s_logger.error("exceptionCaught "+lsid, cause);
		super.exceptionCaught(ctx, cause);
	}
}