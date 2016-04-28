/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Mahmudul Hasan Khan

todo_app.controller("todo_ctrl", function($scope) {
    $scope.todo = data;
    $scope.action_text = "";
    
    $scope.incomplete_count = function(){
        var count = 0;
        angular.forEach($scope.todo.items, function(item){
            if(!item.done){
                count++;
            }
        });
        return count++;
    };
    
    $scope.warning_level = function(){
        return $scope.incomplete_count() < 3 ? "label-success" : "label-warning";
    };
    
    $scope.add_new_item = function(){
        $scope.todo.items.push({action : $scope.action_text, done : false});
        $scope.action_text = "";
    };
});


