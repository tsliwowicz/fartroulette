/**
 * Created by nitzan on 1/24/14.
 */

var myApp = angular.module('app',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {

    $scope.state = {};
    $scope.state.stage = 'selection';    //before, selection, after, leaderboard

    $scope.loggedIn = false;
    $scope.loginData = {};



    $scope.vote = function(idx) {
        console.log("voted " + idx);
    };

    $scope.showElevatorDiv = function () {
        return $scope.state.stage == 'before' || $scope.state.stage == 'selection' || $scope.state.stage == 'after';
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



