/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Mahmudul Hasan Khan

ecommerce_app.filter("unique",function(){
    return function(data, property) {
        if(angular.isArray(data) && angular.isString(property)) {
            var results = [];
            var keys = {};
            for(var i = 0; i<data.length; i++) {
                var val = data[i][property];
                if(angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                }
            }
            
            return results;
        } else {
            return data;
        }
    };
});
ecommerce_app.filter("range",function ($filter){
    return function(data, page_no, page_size){
        if(angular.isArray(data) && angular.isNumber(page_no) && angular.isNumber(page_size)){
            var start_index = (page_no - 1)*page_size;
            if(data.length < start_index) {
                return [];
            }
            return $filter("limitTo")(data.splice(start_index), page_size);
        }
        return data;
    };
});
ecommerce_app.filter("page_count", function(){
    return function(data, size) {
        if(angular.isArray(data)) {
            var result = [];
            for(var i = 0; i < Math.ceil(data.length/size); i++) {
                result.push(i);
            }
            
            return result;
        }
        return data;
    };
});