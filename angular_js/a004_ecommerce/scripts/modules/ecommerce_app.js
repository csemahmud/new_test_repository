/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//   Mahmudul Hasan Khan

var data = {
    user : "Mahmud"
};

var ecommerce_app = angular.module('ecommerce_app', [])
        .constant("product_list_active_class","active")
        .constant("product_list_page_count", 3)
        .constant("basepath", "http://localhost:8080/angular_js/a004_ecommerce/");

ecommerce_app.run(function($http, basepath){
    $http.get(basepath + "scripts/json/products.json").success(function(response){
        data.products = response;
    });
});