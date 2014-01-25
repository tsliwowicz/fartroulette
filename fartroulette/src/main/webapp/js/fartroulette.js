/**
 * Created by nitzan on 1/24/14.
 */

var myApp = angular.module('app',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {

    $scope.state = {};
//    $scope.state.gameState = 'selection';    //before, selection, after, leaderboard

//    BEFORE(10),
//        OPEN_FOR_BETS(30),
//        AFTER(10),
//        LEADERBOARD(10);
//
    $scope.loggedIn = false;
    $scope.loginData = {};

    $scope.changestage = function(stage) {
        $scope.state.gameState = stage;
    };

    $scope.vote = function(idx) {
        console.log("voted " + idx);
    };

    $scope.showElevatorDiv = function () {
//        console.log($scope.state);
//        console.log($scope.state.timeLeftForState);
//        console.log($scope.state.gameState);
//        console.log($scope.state.activeUsersList);
        return $scope.state.gameState == 'BEFORE' || $scope.state.gameState == 'OPEN_FOR_BETS' || $scope.state.gameState == 'AFTER';
    }

    $scope.login = function() {
        console.log('loggin in');
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                window.FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    $scope.loggedIn = true;
                    $scope.loginData.name = name;
                    $scope.$apply();

                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

    $scope.initWebSocket = function() {
        var Sock = function() {
            var socket;
            if (!window.WebSocket) {
                window.WebSocket = window.MozWebSocket;
            }

            if (window.WebSocket) {
                socket = new WebSocket("ws://localhost:8080/websocket");
                socket.onopen = onopen;
                socket.onmessage = onmessage;
                socket.onclose = onclose;
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
                event.preventDefault();
                if (window.WebSocket) {
                    if (socket.readyState == WebSocket.OPEN) {
                        socket.send(event.target.message.value);
                    } else {
                        alert("The socket is not open.");
                    }
                }
            }
            document.forms.inputform.addEventListener('submit', send, false);
        }
        window.addEventListener('load', function() { new Sock(); }, false);
    }

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



