package org.gamejam.gc.fartroulette.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;

import com.google.gson.Gson;

public class ModelClasses {
	public static class ClientModel {
		public long timeLeftForState;
        public List<UserData> nonBetting = new ArrayList<UserData>();
        public List<UserData> activeUsersList = new ArrayList<UserData>();
		public Map<String, CharacterData> charactersData = new HashMap<String, ModelClasses.CharacterData>();
		public ConcurrentMap<Integer, UserData> activeUsers;
		public GameState gameState;
		public List<Chars> currSlots;
		
		
		@Override
		public String toString() {
			return "ClientModel [timeLeftForState=" + timeLeftForState
					+ ", nonBetting=" + nonBetting + ", charactersData="
					+ charactersData + ", activeUsers=" + activeUsers
					+ ", gameState=" + gameState + "]";
		}
		
	}
	
	
	public static class CharacterData {
		String key;
		Map<String, UserData> bettingUsers = new HashMap<String, ModelClasses.UserData>();
		
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
		public final ConcurrentHashMap<String, Integer> bets = new ConcurrentHashMap<String, Integer>();
		public volatile Animation animation = Animation.NONE;
		
		
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
		}
		
		public UserData(String id, String name, String avatar) {
			this.id = id;
			this.name = name;
			this.avatar = avatar;
		}
	}
	
	public static enum GameState {
		OPEN(2),
		BEFORE(6), 
		OPEN_FOR_BETS(10), 
		AFTER(5), 
		LEADERBOARD(7);
		
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
	
	public static enum Chars {
		Char_01, Char_02, Char_03, Char_04, Char_05, Char_06
	}
	
	
	public static class ElevatorData {
		public long timeLeftForState = 0;
		public GameState gameState = GameState.BEFORE;
		public final ConcurrentMap<Integer, UserData> activeUsers = new ConcurrentHashMap<Integer, UserData>();
		public final List<Chars> currSlots = new ArrayList<ModelClasses.Chars>(4);
		
		public ElevatorData() {
			currSlots.add(Chars.Char_01);
			currSlots.add(Chars.Char_02);
			currSlots.add(Chars.Char_03);
			currSlots.add(Chars.Char_06);
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
			model.currSlots = currSlots;
			
			for (Entry<Integer, UserData> u: activeUsers.entrySet()) {
				UserData user = u.getValue();
                model.activeUsersList.add(user);
				if (user.bets.size() == 0) {
					model.nonBetting.add(user);
				} else {
					for (Entry<String, Integer> bb: user.bets.entrySet()) {
						CharacterData characterData = model.charactersData.get(bb.getKey());
						if (characterData == null) {
							characterData = new CharacterData();
							model.charactersData.put(bb.getKey(), characterData);
						}
						characterData.bettingUsers.put(user.id, user);
					}
				}
				
			}
			
			Gson gson = new Gson();
			String json = gson.toJson(model);
			
			
			return json;
		}
		
		
	}
	
	public static class LeaderBoard {
		final ConcurrentMap<String, UserData> board = new ConcurrentHashMap<String, UserData>();
		
	}

}
