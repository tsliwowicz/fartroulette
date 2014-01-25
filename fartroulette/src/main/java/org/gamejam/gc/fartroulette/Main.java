package org.gamejam.gc.fartroulette;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;

//test with http://localhost:8080/test/websocket.html
public class Main 
{
    public static void main( String[] args ) throws Exception
    {
    	BasicConfigurator.configure();
    	Logger.getRootLogger().setLevel(Level.WARN);
    	Logger.getLogger("org.gamejam").setLevel(Level.DEBUG);
    	 int port;
         if (args.length > 0) {
             port = Integer.parseInt(args[0]);
         } else {
             port = 8080;
         }
         new WhoFartedServer(port).run();
    }
}
