/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//   Mahmudul Hasan Khan

person_app.controller('person_ctrl', function($scope) {
    $scope.first_name = 'Mahmudul';
    $scope.last_name = 'Hasan';
    $scope.country = 'Bangladesh';
    $scope.show_info = function() {
        return $scope.first_name + ' ' + $scope.last_name + '; from : ' + $scope.country;
    };
    $scope.persons = [
        {first_name: 'Alia', last_name: 'Bhatt', country: 'Bangladesh'},
        {first_name: 'Katrina', last_name: 'Kaif', country: 'Australia'},
        {first_name: 'Shraddha', last_name: 'Kapoor', country: 'Pakistan'}
    ];
    $scope.add_person = function() {
        $scope.persons.push({ 
            first_name: $scope.first_name, 
            last_name: $scope.last_name,
            country: $scope.country
        });
    };
    $scope.clear = function() {
        $scope.first_name = "";
        $scope.last_name = "";
        $scope.country = "";
    };
});