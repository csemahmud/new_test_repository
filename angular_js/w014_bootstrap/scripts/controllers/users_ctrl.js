/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//   Mahmudul Hasan Khan

bootstrap_app.controller('users_ctrl', function($scope) {
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.email = '';
    $scope.password1 = '';
    $scope.password2 = '';
    $scope.users = [
        {user_id:1,first_name:'Mahmudul',last_name:'Hasan',password:'asd',email:'hasan417@diu.edu.bd'},
        {user_id:2,first_name:'Alia',last_name:'Bhatt',password:'asd',email:'alia.bhatt@mail.com'},
        {user_id:3,first_name:'Iron',last_name:'Man',password:'asd',email:'iron.man@mail.com'},
        {user_id:4,first_name:'Shraddha',last_name:'Kapoor',password:'asd',email:'shraddha.kapoor@mail.com'}
    ];
    
    $scope.edit = false;
    $scope.mismatch_password = false;
    $scope.incomplete = false;
    $scope.email_exits = false;
    
    $scope.edit_user = function(user_id) {
        if(user_id == null) {
            $scope.edit = false;
            $scope.incomplete = true;
            $scope.first_name = '';
            $scope.last_name = '';
            $scope.email = '';
            $scope.password1 = '';
            $scope.password2 = '';
        } else {
            $scope.edit = true;
            $scope.user_id = user_id;
            $scope.first_name = $scope.users[user_id-1].first_name;
            $scope.last_name = $scope.users[user_id-1].last_name;
            $scope.email = $scope.users[user_id-1].email;
            $scope.password2 = $scope.users[user_id-1].password;
        }
    };
    
    $scope.$watch('first_name', function(){$scope.validate_user();});    
    $scope.$watch('last_name', function(){$scope.validate_user();});    
    $scope.$watch('email', function(){$scope.validate_user();});    
    $scope.$watch('password1', function(){$scope.validate_user();});    
    $scope.$watch('password2', function(){$scope.validate_user();});
    
    $scope.validate_user = function() {
        if($scope.password1 !== $scope.password2) {
            $scope.mismatch_password = true;
        } else {
            $scope.mismatch_password = false;
        }
        
        $scope.email_exits = false;
        if(!$scope.edit) {
            for(var i = 0; i < $scope.users.length; i++) {
                if($scope.users[i].email == $scope.email) {
                    $scope.email_exits = true;
                    break;
                }
            }
        }
        
        if(!$scope.first_name.length || !$scope.last_name.length ||
                !$scope.email.length || !$scope.password1.length ||
                !$scope.password2.length) {
            $scope.incomplete = true;
                } else {
                    $scope.incomplete = false;
                }
    };
    
    $scope.save_user = function() {
        if($scope.edit) {
            $scope.users[$scope.user_id-1].first_name = $scope.first_name;
            $scope.users[$scope.user_id-1].last_name = $scope.last_name;
        } else {
            $scope.users.push({
                user_id: $scope.users[$scope.users.length - 1].user_id + 1,
                first_name: $scope.first_name,
                last_name: $scope.last_name,
                email: $scope.email,
                password: $scope.password1
            });
        }
        $scope.edit = false;
        $scope.first_name = '';
        $scope.last_name = '';
        $scope.email = '';
        $scope.password1 = '';
        $scope.password2 = '';
    };
});