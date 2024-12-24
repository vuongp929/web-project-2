var myApp = angular.module("myApp", [])

myApp.controller("myController", $scope => {
    $scope.myFun = function() {
        if(isNaN($scope.soA)){
           return 
        }
        if(isNaN($scope.soB)){
            return 
         }
    $scope.tong= Number($scope.soA)  + Number($scope.soB)
    
    }
})