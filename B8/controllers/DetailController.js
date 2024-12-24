window.DetailController = function ($scope, $routeParams, $http) {
    $scope.title = "Trang chi tiết"
    // End points (API)
    let urlUser = "http://localhost:3000/users"
    let urlPost = "http://localhost:3000/posts"

    $http.get(urlPost + "/" + $routeParams.id)
        .then(function (response) {
            $scope.post = response.data
        })
}