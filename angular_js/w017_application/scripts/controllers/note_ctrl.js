/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//   Mahmudul Hasan Khan

note_app.controller('note_ctrl', function($scope, $http) {
    $scope.message = "";
    $scope.message_id = "";
    $scope.left = function() { return 100 - $scope.message.length; };
    $scope.clear = function() { $scope.message = ""; };
    $scope.save = function() { alert("Not saved . Server is not connected ."); };
    $scope.results = null;
    $scope.server81 = false;
    $scope.server80 = false;
    $scope.path = "";
    
    $http.get("http://localhost:81/message/").success(function(response) {
        if(response.results != null) {
            $scope.results = response.results;
            $scope.message = $scope.results[0].message;
            $scope.message_id = $scope.results[0].message_id;
            $scope.server81 = true;
            $scope.server80 = false;
            $scope.path = "http://localhost:81/message/";
        }
    });
    
    $http.get("http://localhost/message/").success(function(response) {
        if(!$scope.server81) {
            $scope.results = response.results;
            $scope.message = $scope.results[0].message;
            $scope.message_id = $scope.results[0].message_id;
            $scope.server80 = true;
            $scope.server81 = false;
            $scope.path = "http://localhost/message/";
        }
    });
});