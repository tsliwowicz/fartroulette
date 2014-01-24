package org.gamejam.gc.fartroulette;


public class Main 
{
    public static void main( String[] args ) throws Exception
    {
    	 int port;
         if (args.length > 0) {
             port = Integer.parseInt(args[0]);
         } else {
             port = 8080;
         }
         new WebSocketServer(port).run();
    }
}
