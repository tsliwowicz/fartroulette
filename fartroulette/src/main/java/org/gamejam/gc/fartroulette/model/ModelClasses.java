package org.gamejam.gc.fartroulette.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import com.google.gson.Gson;

public class ModelClasses {
	public static class ClientModel {
		public long timeLeftForState;
        public List<UserData> nonBetting = new ArrayList<UserData>();
        public List<UserData> activeUsersList = new ArrayList<UserData>();
		public Map<String, SlotsData> slotsData = new HashMap<String, ModelClasses.SlotsData>();
		public ConcurrentMap<String, UserData> activeUsers;
		public GameState gameState;
		public List<Chars> currSlots;
		public String farterSlot = "";
		public List<UserData> leaderBoard = new ArrayList<UserData>();
		
		
		@Override
		public String toString() {
			return "ClientModel [timeLeftForState=" + timeLeftForState
					+ ", nonBetting=" + nonBetting + ", charactersData="
					+ slotsData + ", activeUsers=" + activeUsers
					+ ", gameState=" + gameState + "]";
		}
		
	}
	
	
	public static class SlotsData {
		String key;
		Map<String, UserData> bettingUsers = new HashMap<String, ModelClasses.UserData>();
		List<String> bettingAvatars = new ArrayList<String>();
		
		@Override
		public String toString() {
			return "CharacterData [key=" + key + ", bettingUsers="
					+ bettingUsers + "]";
		}

		
		
	}
	
	
	public static class UserData {
		public final String id;
		public final String name;
		public final String avatar;
		public final AtomicLong score = new AtomicLong();
		public final AtomicLong numGames = new AtomicLong();
		public final ConcurrentHashMap<String, Integer> bets = new ConcurrentHashMap<String, Integer>();
		public volatile Animation animation = Animation.NONE;
		public volatile long lastKeepAlive;
		
		
		@Override
		public String toString() {
			return "UserData [id=" + id + ", name=" + name + ", avatar="
					+ avatar + ", score=" + score + ", bets=" + bets
					+ ", animation=" + animation + "]";
		}

		public UserData (String id, String name, String avatar, long score) {
			this.id = id;
			this.name = name;
			this.avatar = avatar;
			this.score.set(score);
			lastKeepAlive = System.currentTimeMillis();
		}
		
		public UserData(String id, String name, String avatar) {
			this.id = id;
			this.name = name;
			this.avatar = avatar;
			lastKeepAlive = System.currentTimeMillis();
		}
	}
	
	public static enum GameState {
		OPEN(2),
		BEFORE(2), 
		OPEN_FOR_BETS(10), 
		AFTER(5), 
		LEADERBOARD(5);
		
		private int stateDuration;
		
		GameState(int duration) {
			this.stateDuration = duration;
			
		}

		public int getStateDuration() {
			return stateDuration;
		}
	}
	
	public static enum Animation {
		ONE, TWO, THREE, NONE
	}
	
	public static final Integer NUM_SLOTS = 4;
	
	public static enum Chars {
		Char_01, Char_02, Char_03, Char_04, Char_05, Char_06
	}
	
	
	public static class ElevatorData {
		public volatile long timeLeftForState = 0;
		public volatile GameState gameState = GameState.BEFORE;
		public final ConcurrentMap<String, UserData> activeUsers = new ConcurrentHashMap<String, UserData>();
		private List<Chars> currSlots = new ArrayList<ModelClasses.Chars>(4);
		public volatile String farterSlot = "";
		public final LeaderBoard leaderBoard = new LeaderBoard();
		
		ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
		
		public ElevatorData() {
			currSlots.add(Chars.Char_01);
			currSlots.add(Chars.Char_02);
			currSlots.add(Chars.Char_03);
			currSlots.add(Chars.Char_06);
		}
		
		public List<Chars> getCurrSlots() {
			List<Chars> rt;
			lock.readLock().lock();
			try {
				rt = new ArrayList<Chars>(currSlots);
				
			} finally {
				lock.readLock().unlock();
			}
			return rt;
		}
		
		public void setCurrSlots(List<Chars> slots) {
			lock.writeLock().lock();
			try {
				currSlots = new ArrayList<Chars>(slots);
			} finally {
				lock.writeLock().unlock();
			}
		}
		
		
		
		@Override
		public String toString() {
			return "ElevatorData [gameState=" + gameState + ", activeUsers="
					+ activeUsers + "]";
		}



		public String toJSON()  {
			ClientModel model = new ClientModel();
			model.activeUsers = activeUsers;
			model.timeLeftForState = timeLeftForState;
			model.gameState = gameState;
			model.currSlots = getCurrSlots();
			model.farterSlot = farterSlot;
			
			for (Entry<String, UserData> l: leaderBoard.board.entrySet()) {
				model.leaderBoard.add(l.getValue());
			}
			
			if (model.leaderBoard.size() > 0) {
				Collections.sort(model.leaderBoard, new Comparator<UserData>() {

					@Override
					public int compare(UserData arg0, UserData arg1) {
						
						return arg0.score.intValue() - arg1.score.intValue();
					}
				});
			}
			
			
			for (Entry<String, UserData> u: activeUsers.entrySet()) {
				UserData user = u.getValue();
                model.activeUsersList.add(user);
				if (user.bets.size() == 0) {
					model.nonBetting.add(user);
				} else {
					for (Entry<String, Integer> bb: user.bets.entrySet()) {
						SlotsData slotData = model.slotsData.get(bb.getKey());
						if (slotData == null) {
							slotData = new SlotsData();
							model.slotsData.put(bb.getKey(), slotData);
						}
						slotData.bettingUsers.put(user.id, user);
						slotData.bettingAvatars.add(user.avatar);
					}
				}
				
			}
			
			Gson gson = new Gson();
			String json = gson.toJson(model);
			
			
			return json;
		}
		
		
	}
	
	public static class LeaderBoard {
		public final ConcurrentMap<String, UserData> board = new ConcurrentHashMap<String, UserData>();
		
	}

}
