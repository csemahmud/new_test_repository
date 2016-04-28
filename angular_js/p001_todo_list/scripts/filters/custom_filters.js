/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Mahmudul Hasan Khan

todo_app.filter("checked_items",function(){
    return function(items, show_complete){
        var result_arr = [];
        angular.forEach(items, function(item){
            if( !item.done || show_complete) {
                result_arr.push(item);
            }
        });
        return result_arr;
    };
});


