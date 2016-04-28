/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//   Mahmudul Hasan Khan

person_app.controller('person_ctrl', function($scope) {
    $scope.first_name = 'Mahmudul';
    $scope.last_name = 'Hasan';
    $scope.salary = 30000;
    $scope.show_info = function() {
        return $scope.first_name + ' ' + $scope.last_name + '; salary : ' + $scope.salary;
    };
    $scope.persons = [
        {first_name: 'Alia', last_name: 'Bhatt', salary: 20000},
        {first_name: 'Katrina', last_name: 'Kaif', salary: 10000},
        {first_name: 'Shraddha', last_name: 'Kapoor', salary: 15000}
    ];
    $scope.add_person = function() {
        $scope.persons.push({ 
            first_name: $scope.first_name, 
            last_name: $scope.last_name,
            salary: $scope.salary
        });
    };
    $scope.clear = function() {
        $scope.first_name = "";
        $scope.last_name = "";
        $scope.salary = 0;
    };
    $scope.salary_from = 0;
    $scope.salary_to = 1000000;
    $scope.show_range = function(person) {
        if($scope.salary_from <= $scope.salary_to) {
            return (person.salary >= $scope.salary_from) && (person.salary <= $scope.salary_to);
        }
        return (person.salary <= $scope.salary_from) && (person.salary >= $scope.salary_to);
    }
});