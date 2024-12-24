var myApp = angular.module("myApp", [])

myApp.controller("myController", function
    ($scope) {
    $scope.welcome = "Xin chào các bạn"
})

myApp.controller("child", function
    ($scope) {
  $scope.welcome = "Xin chào các bạn 2"
})


myApp.controller("block1", function
    ($scope, $rootScope) {
  $rootScope.data = "Hello"
})

myApp.controller("block2", function
    ($scope, $rootScope) {

})