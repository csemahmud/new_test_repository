/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//   Mahmudul Hasan Khan

var data = {
    user : "Mahmud"
};

var todo_app = angular.module('todo_app', [])
                      .constant("basepath","http://localhost:8080/angular_js/p001_todo_list/");

todo_app.run(function($http, basepath){
    $http.get(basepath + "scripts/json/items.json").success(function(response){
        data.items = response;
    });
});
