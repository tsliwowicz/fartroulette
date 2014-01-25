package org.gamejam.gc.fartroulette;


import org.gamejam.gc.fartroulette.model.ModelClasses;
import org.gamejam.gc.fartroulette.model.ModelClasses.ElevatorData;
import org.gamejam.gc.fartroulette.model.ModelClasses.UserData;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;


public class JustATest {


	private ElevatorData elevatorData;

	@Before
	public void setUp() throws Exception {
		elevatorData = new ModelClasses.ElevatorData();
		UserData userData1 = new ModelClasses.UserData("id1", "myname", "myavatar");
		UserData userData2 = new ModelClasses.UserData("id2", "myname2", "myavatar2");
		userData1.bets.put("char1", 1);
		userData1.bets.put("char2", 1);
		elevatorData.activeUsers.put("1", userData1);
		elevatorData.activeUsers.put("2", userData2);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test()  {
		
		System.out.println(elevatorData.toJSON());
	}

}
