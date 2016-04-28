/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Mahmudul Hasan Khan

ecommerce_app.controller("product_list_ctrl", function($scope, product_list_active_class, product_list_page_count) {
    
    $scope.selected_category = null;
    $scope.selected_page = 1;
    $scope.page_size = product_list_page_count;
    
    $scope.select_category = function(category) {
        if($scope.selected_category != category) {
            $scope.selected_page = 1;
            $scope.selected_category = category;
        }
    };
    
    $scope.is_category_selected = function(product) {
        return $scope.selected_category == null || $scope.selected_category == product.category;
    };
    
    $scope.show_active = function(category) {
        if($scope.selected_category == category)
            return product_list_active_class;
    };
    
    $scope.select_page = function(page_no) {
        $scope.selected_page = page_no;
    };
    
    $scope.get_page_class = function(page_no) {
        return $scope.selected_page == page_no ? product_list_active_class : "";
    };
});


