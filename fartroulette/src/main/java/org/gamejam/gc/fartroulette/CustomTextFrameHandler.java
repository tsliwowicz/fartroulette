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

import java.util.concurrent.atomic.AtomicInteger;

import org.apache.log4j.Logger;
import org.gamejam.gc.fartroulette.model.ModelClasses.ElevatorData;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.util.concurrent.GlobalEventExecutor;

@SuppressWarnings("unused")

public class CustomTextFrameHandler extends SimpleChannelInboundHandler<TextWebSocketFrame> {
	private static final Logger s_logger = Logger.getLogger(CustomTextFrameHandler.class);
	private static AtomicInteger sid = new AtomicInteger();
	private ChannelHandlerContext myCtx;
	private int lsid = -1;
	private ChannelGroup allchannels;
	private ElevatorData elevatorData;
	
	public CustomTextFrameHandler(ChannelGroup allchannels, ElevatorData elevatorData) {
		this.allchannels = allchannels;
		this.elevatorData = elevatorData;
	}


	@Override
    protected void channelRead0(ChannelHandlerContext ctx, TextWebSocketFrame frame) throws Exception {
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