/**
 * Created by nitzan on 1/24/14.
 */

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myApp = angular.module('app',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {

    $scope.state = {};
//    $scope.state.gameState = 'selection';    //before, selection, after, leaderboard

//        BEFORE(10),
//        OPEN_FOR_BETS(30),
//        AFTER(10),
//        LEADERBOARD(10);
//
    $scope.loggedIn = false;
    $scope.loginData = {};

    $scope.currentQ = "";

    $scope.isLeader =  true;



//    $scope.$watch('state.gameState', function() {
//        alert('hey, myVar has changed!');
//    });

    $scope.$watch('state.gameState', function() {
        console.log($scope.state);
        console.log($scope.state.gameState);
        if ($scope.state.gameState == 'OPEN_FOR_BETS') {
            $scope.currentQ = $scope.questions[getRandomInt(0, $scope.questions.length-1)];
            $scope.playSound('moving');
        } else {
            $scope.currentQ = " ";
        }

        if ($scope.state.gameState == 'OPEN') {
            $scope.playSound('elevatore_before_go');
            $scope.isLeader = true;
        }

        if ($scope.state.gameState == 'BEFORE') {
            $scope.playSound('fart'+getRandomInt(1,4));
        }
        if ($scope.state.gameState == 'AFTER') {
//            console.log($scope.state.farterSlot);
//            console.log($scope.state.farterSlot.substring(4,5));
//            console.log('farter/' +  $scope.state.currSlots[parseInt($scope.state.farterSlot.substring(4,5))]);
            $scope.playSound('farter/' +  $scope.state.currSlots[parseInt($scope.state.farterSlot.substring(4,5))-1]  );
//            $scope.state.farterSlot
//            $scope.state.curr
//            $scope.playSound('fart'+getRandomInt(1,4));
        }
//        BEFORE

        //the question changed
//        $location.path('/q/' + $scope.state.theQuestion);
    }, false);



    $scope.highlightNum = function(idx){
        if ('OPEN_FOR_BETS' == $scope.state.gameState )
            return idx == $scope.state.timeLeftForState;
        return false;
    }

    $scope.playSound = function(sound){
        console.log("playSound");
        var snd = new Audio("assets/"+sound+".mp3"); // buffers automatically when created
        snd.play();
    }

    $scope.changestage = function(stage) {
        $scope.state.gameState = stage;
    };

    $scope.vote = function(idx) {
        console.log("voted " + idx);
        if ('OPEN_FOR_BETS' == $scope.state.gameState ) {
            $scope.send("VOTE?voted=slot"+idx+"&uid="+$scope.loginData.id);
        }
        console.log($scope.state.currSlots);
        console.log($scope.state);
    };

    $scope.didvoteon = function(idx){
        if ( ('OPEN_FOR_BETS' == $scope.state.gameState ) &&
            ($scope.state.slotsData['slot'+idx] != undefined) &&
            $scope.state.slotsData['slot'+idx].bettingUsers[$scope.loginData.id] ){
            return true;
        }
        return false;
    }

    $scope.didvoteonstyle = function(idx){
        return "left: {" + idx * 23 + "}%";
    }

    $scope.didcharfart = function(idx) {
        if ('AFTER' == $scope.state.gameState  &&  (("slot"+idx) == $scope.state.farterSlot) ){
            return true;
        }
        return false;
    }

    $scope.slotImg = function(idx) {
        return $scope.state.currSlots[idx-1];

    };

    $scope.slotIdxToImages = function(idx) {
        if ($scope.state.slotsData && $scope.state.slotsData["slot" + idx] && $scope.state.slotsData["slot" + idx].bettingAvatars){
            console.log($scope.state.slotsData["slot" + idx].bettingAvatars);
            return  $scope.state.slotsData["slot" + idx].bettingAvatars;
        } else {
            return [];
        }

    }

    $scope.showElevatorDiv = function () {
//        console.log($scope.state);
//        console.log($scope.state.timeLeftForState);
//        console.log($scope.state.gameState);
//        console.log($scope.state.activeUsersList);
//        return $scope.state.gameState == 'BEFORE' || $scope.state.gameState == 'OPEN_FOR_BETS' || $scope.state.gameState == 'AFTER';
        return $scope.state.gameState != 'LEADERBOARD'
    }

    $scope.login = function() {
        console.log('loggin in');
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                window.FB.api('/me', function(response) {
//                    $scope.initWebSocket();
                	
                    console.log('Good to see you, ' + response.name + '.');
                    console.log(response);
                    $scope.loggedIn = true;
                    $scope.loginData.name = response.name;
                    $scope.loginData.id = response.id;
                    $scope.loginData.image = "http://graph.facebook.com/"+response.id+"/picture";//546941722

                    $scope.send("LOGIN?name="+$scope.loginData.name+"&id="+$scope.loginData.id+"&image="+$scope.loginData.image);
                    
                    function keepAlive() {
                    	$scope.send("KEEPALIVE?uid="+$scope.loginData.id);
                    }
                    window.setTimeout(keepAlive, 1000);
                    
                    $scope.$apply();

                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    $scope.initWebSocket = function() {
        console.log("initWebSocket");
        var Sock = function() {
            var socket;
            if (!window.WebSocket) {
                window.WebSocket = window.MozWebSocket;
            }

            if (window.WebSocket) {
                socket = new WebSocket("ws://"+location.host+"/websocket");

                socket.onopen = onopen;
                socket.onmessage = onmessage;
                socket.onclose = onclose;
//                socket.send = send;

                $scope.send = send;
            } else {
                alert("Your browser does not support Web Socket.");
            }

            function onopen(event) {
                console.log("Web Socket opened!");
            }

            function onmessage(event) {
//                appendTextArea(event.data);
                $scope.state = JSON.parse(event.data);
                $scope.$apply();
//                console.log("Got Data");
//                console.log(event.data);
            }
            function onclose(event) {
                console.log("Web Socket closed");
            }

//            function appendTextArea(newData) {
//                var el = getTextAreaElement();
//                el.value = el.value + '\n' + newData;
//            }
//
//            function getTextAreaElement() {
//                return document.getElementById('responseText');
//            }

            function send(event) {
                console.log(event);
//                event.preventDefault();
                if (window.WebSocket) {
                    if (socket.readyState == WebSocket.OPEN) {
                        socket.send(event);
                    } else {
                        alert("The socket is not open.");
                    }
                }
            }
//            document.forms.inputform.addEventListener('submit', send, false);
        }
        window.addEventListener('load', function() {
            console.log("loading sock")
            new Sock();
//            $scope.sock = iSock.socket;
        }, false);
    }

//    $scope.initSpot = function (){
//            canvas = document.getElementById("spot");
//            canvas.width  = window.innerWidth;
//            canvas.height = window.innerHeight;
//            exportRoot = new lib.spot3();
//
//            stage = new createjs.Stage(canvas);
//            stage.addChild(exportRoot);
//            stage.update();
//
//            createjs.Ticker.setFPS(lib.properties.fps);
//            createjs.Ticker.addEventListener("tick", stage);
//    }

    $scope.questions = [" Who just man saluted?",
        "Who just Airbrushed thier boxers?",
        "Whose anal acoustics was that?",
        "Who did that Anal Ahem?",
        "Who just Analy Saluted?",
        "Who made that anal volcano?",
        "Who did that arse blast?",
        "Who is the Ass Blaster?",
        "Who just made that backdoor breeze?",
        "Who just backfired?",
        "Who's the Bean Blower?",
        "Who just belched from behind?",
        "Who just beeped his horn?",
        "Who's the one who blasted off?",
        "Who just blew their ass?",
        "Who blew the butt bungle?",
        "Who blew the big brown horn?",
        "Who just blew a bad kiss?",
        "Who's the bomber?",
        "Who just bottom burped?",
        "Who just broke the sound barrier without a plane?",
        "Who broke wind?",
        "Who made that brown thunder?",
        "Who was the Bun Shaker?",
        "Who just burned rubber?",
        "Who busted ass?",
        "Who butt burped?",
        "Who made the butthair harmony?",
        "Who is the owner of the butt percussion?",
        "Who just made a butt trauma?",
        "Who's got the Butt trumpet?",
        "Who has the Butt tuba?",
        "Who's the Butt Basoon?",
        "Who's the Cheek flapper?",
        "Who's just been Cheesin'?",
        "Who just cracked one off?",
        "Who's the Crowd Splitter?",
        "Who just Cut a Stinker?",
        "Who Cut the Cheese?",
        "Who Cut the Wind?",
        "Who has Death Breath?",
        "Who just deflated?",
        "Who did the One-Cheek Sneak?",
        "Who just Dropped Ass?",
        "Who emptied their tank?",
        "Who just exploded between the legs?",
        "Who farted?!",
        "Who just fired a stink torpedo?",
        "Who just Floofed?",
        "Who just had a Fowl Howl?",
        "Who made the Fragrant Fuzzy?",
        "Who made the Free-Floating anal vapors?",
        "Who Freeped??",
        "Who just had a Gas Attack?",
        "Who's the Gas Blaster?",
        "Who has Gas from the Ass?",
        "Who is the Gas Master?",
        "Who has Gaseous intestinal by-products ?",
        "Who just honked?",
        "Who made a Hydrogen bomb?",
        "Who inverted a burp?",
        "Who Kaboomed?",
        "Who just kept warm?",
        "Who jumped his guts?",
        "Who's the Jockey burner?",
        "Who Killed the canary?",
        "Who just laid a wind loaf?",
        "Who just laid an air biscuit?",
        "Who just left a gas trap?",
        "Who let out a beefer?",
        "Who let the beans be heard?",
        "Who let one fly?",
        "Who let one go?",
        "Who let the beans out?",
        "Who let one rip?",
        "Who made a stink?",
        "Who made an Odor Bubble?",
        "Who made an Odorama?",
        "Who's the One Man Jazz Band?",
        "Who made the One-Gun Salute?",
        "Who's the Pant stainer?",
        "Who made a panty burp?",
        "Who Parped?",
        "Who just Passed Gas?",
        "Who just Passed Wind?",
        "Who just made a Poof?",
        "Who pooted?",
        "Who just made a Rectal Honk?",
        "Who Rectaly Shouted?",
        "Who released a Squeeker?",
        "Who Ripped Ass?",
        "Who saluted their shorts?",
        "Who shot the Cannon?",
        "Who's the Steamer?",
        "Who baked a Stink Burger?",
        "Who released Stress?",
        "Whose Tail Wind was that?",
        "Who made the F Bomb?",
        "Who's responsible for the sound and the Fury?",
        "Who has Thunder pants?",
        "Who tooted?",
        "Who made a Triple Flutter Blast?",
        "Who Trouser Coughed?",
        "Who under burped?",
        "Who dealt it?",
        "Who burped the wrong way?"];

}]);








//myApp.directive('character', function() {
//    return {
//        restrict: 'E',
//        scope: {
//            anim: '=anim'
//        },
//        controller: function($scope, $element) {
//
//            exportRoot = eval("new lib.fatguy1()");// new lib.fatguy1();
//            exportRoot.setTransform(100,200);
//
//            stage = new createjs.Stage($element[0]);
//            stage.addChild(exportRoot);
//            stage.update();
//
//            createjs.Ticker.setFPS(lib.properties.fps);
//            createjs.Ticker.addEventListener("tick", stage);
//
//        },
//        template:
//            '<canvas width="200" height="400"></canvas>',
//        replace: true
//    };
//});



