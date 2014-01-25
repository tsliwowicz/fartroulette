package org.gamejam.gc.fartroulette;

/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License, version
 * 2.0 (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import org.gamejam.gc.fartroulette.model.ModelClasses;
import org.gamejam.gc.fartroulette.model.ModelClasses.ElevatorData;
import org.gamejam.gc.fartroulette.model.ModelClasses.GameState;
import org.gamejam.gc.fartroulette.model.ModelClasses.UserData;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseEncoder;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.util.concurrent.GlobalEventExecutor;

/**
 * A WebSocket Server that respondes to requests at:
 *
 * <pre>
 * http://localhost:8080/websocket
 * </pre>
 *
 * The example differs from many of the other examples in Netty in that is does
 * not have an acomponying client. Instead a html page is provided that
 * interacts with this server. <br>
 * Open up the following file a web browser that supports WebSocket's:
 *
 * <pre>
 * example/src/main/resources/websocketx/html5/websocket.html
 * </pre>
 *
 * The html page is very simple were you simply enter some text and the server
 * will echo the same text back, but in uppercase. You, also see getStatus messages
 * in the "Response From Server" area when client has connected, disconnected
 * etc.
 *
 */
public class WhoFartedServer {
	
	private static final ChannelGroup s_allChannels = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
	//					s_allChannels.writeAndFlush(new TextWebSocketFrame("fart"));

    private static final ElevatorData s_elevatorData = new ElevatorData();
	
	private final int port;

	private Thread thread;

    public WhoFartedServer(int port) {
        this.port = port;
    }

    public void run() throws Exception {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            final ServerBootstrap sb = new ServerBootstrap();
            sb.group(bossGroup, workerGroup)
             .channel(NioServerSocketChannel.class)
             .childHandler(new ChannelInitializer<SocketChannel>() {
                @Override
                public void initChannel(final SocketChannel ch) throws Exception {
                    ch.pipeline().addLast(
                        new HttpRequestDecoder(),
                        new HttpObjectAggregator(65536),
                        new HttpResponseEncoder(),
                        new HttpStaticFileServerHandler(true, "websocket", "api"),
                        new WebSocketServerProtocolHandler("/websocket"),
                        new CustomTextFrameHandler(s_allChannels, s_elevatorData));
                    
                }
            });
            
    		loadDummyData();
            
            thread = new Thread() {

				@Override
				public void run() {
					while (true) {
						s_allChannels.writeAndFlush(new TextWebSocketFrame(s_elevatorData.toJSON()));
						try {
							sleep(200);
						} catch (InterruptedException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}
					
				}
            	
            };
            thread.start();

            final Channel ch = sb.bind(port).sync().channel();
            System.out.println("Web socket server started at port " + port);

            ch.closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

	private void loadDummyData() {
		UserData userData1 = new ModelClasses.UserData("id1", "myname", "myavatar");
		UserData userData2 = new ModelClasses.UserData("id2", "myname2", "myavatar2");
		userData1.bets.put("char1", 1);
		userData1.bets.put("char2", 1);
		s_elevatorData.activeUsers.put(1, userData1);
		s_elevatorData.activeUsers.put(2, userData2);
		s_elevatorData.gameState = GameState.OPEN_FOR_BETS;
	}


}