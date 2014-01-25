package org.gamejam.gc.fartroulette;

import org.apache.log4j.BasicConfigurator;

//test with http://localhost:8080/test/websocket.html
public class Main 
{
    public static void main( String[] args ) throws Exception
    {
    	BasicConfigurator.configure();
    	 int port;
         if (args.length > 0) {
             port = Integer.parseInt(args[0]);
         } else {
             port = 8080;
         }
         new WebSocketServer(port).run();
    }
}
