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

import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.log4j.Logger;
import org.gamejam.gc.fartroulette.model.ModelClasses;
import org.gamejam.gc.fartroulette.model.ModelClasses.Chars;
import org.gamejam.gc.fartroulette.model.ModelClasses.ElevatorData;
import org.gamejam.gc.fartroulette.model.ModelClasses.GameState;
import org.gamejam.gc.fartroulette.model.ModelClasses.UserData;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
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


public class WhoFartedServer {
	private static final Logger s_logger = Logger.getLogger(WhoFartedServer.class);
	
	private static final ChannelGroup s_allChannels = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);

    private static final ElevatorData s_elevatorData = new ElevatorData();
	
	private final int port;

	private Thread updateThread;

	private Thread gameLoop;

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
                        new WebSocketFrameHandler(s_allChannels, s_elevatorData));
                    
                }
            }).option(ChannelOption.SO_BACKLOG, 128)  
            	.option(ChannelOption.SO_TIMEOUT, 100)        
            .childOption(ChannelOption.SO_KEEPALIVE, true); 
            
    		//loadDummyData();
            
            runUpdaterThread();
            
            runGame();

            final Channel ch = sb.bind(port).sync().channel();
            System.out.println("Web socket server started at port " + port);

            ch.closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

	private void runGame() {
		final GameState[] states = GameState.values();
		final int numStates = states.length;
		
		gameLoop = new Thread() {
			
			Random gen = new Random(System.currentTimeMillis());
			
			public List<Chars> randomizeSlots() {
				int numSlots = ModelClasses.NUM_SLOTS;
				Chars[] chars = ModelClasses.Chars.values();
				List<Chars> slotsTemp = new ArrayList<Chars>();
				List<Chars> slots = new ArrayList<Chars>();
				
				for (Chars c: chars) {
					slotsTemp.add(c);
				}
				
				int toRemove = numSlots;
				
				while (toRemove > 0) {
					int i = Math.round(gen.nextFloat() * (slotsTemp.size() - 1));
					slots.add(slotsTemp.get(i));
					slotsTemp.remove(i);
					toRemove--;
				}
				
				return slots;
				
			}

			@Override
			public void run() {
				setName("game-thread");
				int currStateIndex = 0;
				GameState currState = GameState.OPEN;
				s_elevatorData.setCurrSlots(randomizeSlots());
				int currSleepInState = 0;
				s_elevatorData.gameState = currState;
				s_elevatorData.timeLeftForState = currState.getStateDuration() - currSleepInState;
				while (true) {
					if (currSleepInState > currState.getStateDuration()) {
						currStateIndex++;
						currStateIndex = currStateIndex % numStates;
						currState = states[currStateIndex];
						currSleepInState = 0;
						s_elevatorData.gameState = currState;
						if (currState == GameState.OPEN) {
							s_elevatorData.setCurrSlots(randomizeSlots());
							for (Entry<String, UserData> u: s_elevatorData.activeUsers.entrySet()) {
								u.getValue().bets.clear();
							}
							s_elevatorData.farterSlot = "";
							
						} else if (currState == GameState.AFTER) {
							int numSlots = ModelClasses.NUM_SLOTS;
							int winner = Math.round(gen.nextFloat() * numSlots);
							s_elevatorData.farterSlot = "slot"+winner;
							for (Entry<String, UserData> u: s_elevatorData.activeUsers.entrySet()) {
								ConcurrentHashMap<String, Integer> bets = u.getValue().bets;
								Integer bet = bets.get(s_elevatorData.farterSlot);
								if (bet != null) {
									u.getValue().score.addAndGet(bet);
								}
								u.getValue().numGames.incrementAndGet();
								UserData userData = s_elevatorData.leaderBoard.board.get(u.getKey());
								if (userData == null) {
									s_elevatorData.leaderBoard.board.put(u.getKey(), u.getValue());
								}
							}
						}
					}
					s_elevatorData.timeLeftForState = currState.getStateDuration() - currSleepInState;
					s_logger.info("timeLeftForState: "+s_elevatorData.timeLeftForState);
					
					try {
						sleep(1000);
						currSleepInState++;
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
				
			}
			
		};
		gameLoop.start();
	}

	private void runUpdaterThread() {
		updateThread = new Thread() {

			@Override
			public void run() {
				setName("update-thread");
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
		updateThread.start();
	}

	/*private void loadDummyData() {
		UserData userData1 = new ModelClasses.UserData("id1", "myname", "myavatar");
		UserData userData2 = new ModelClasses.UserData("id2", "myname2", "myavatar2");
		userData1.bets.put("char1", 1);
		userData1.bets.put("char2", 1);
		s_elevatorData.activeUsers.put("1", userData1);
		s_elevatorData.activeUsers.put("2", userData2);
		s_elevatorData.gameState = GameState.OPEN_FOR_BETS;
	}*/


}