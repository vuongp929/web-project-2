var myApp = angular.module("myApp", ['ngRoute'])
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/list.html',
            controller: ListController
        })
        .when("/add-post", {
            templateUrl: 'views/add.html',
            controller: AddController
        })
        .when("/detail-post/:id", {
            templateUrl: 'views/detail.html',
            controller: DetailController
        })
        .when("/update-post/:id", {
            templateUrl: 'views/update.html',
            controller: UpdateController
        })
        .otherwise({
            redirectTo: '/'
        })
})