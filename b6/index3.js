var myApp = angular.module("myApp", [])

myApp.controller("myController", function($scope, $rootScope) {
    $scope.Pi= 3.14;
    $scope.myFun = function() {
        if(isNaN($scope.bkinh)){
           alert("Please enter number");
            return 
        }
        $rootScope.chuvi= 2 * $scope.Pi * Number($scope.bkinh) 
        $rootScope.dientich= 2 * $scope.Pi * Number($scope.bkinh) * Number($scope.bkinh)

    }
})
myApp.controller("myController2", function($scope, $rootScope) {

})