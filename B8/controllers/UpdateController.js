window.UpdateController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Trang chỉnh sửa"
    let urlUser = "http://localhost:3000/users"
    let urlPost = "http://localhost:3000/posts"

    function init() {
        // load users lên select option
        $http.get(urlUser)
            .then(function (response) {
                $scope.users = response.data
            })
        // load post theo id lên form
        $http.get(urlPost + "/" + $routeParams.id)
            .then(function (response) {
                $scope.post = response.data
            })
    }
    init()


    $scope.updatePost = function () {
        $http.put(urlPost + "/" + $routeParams.id, $scope.post)
            .then(function () {
                alert("Chỉnh sửa thành công")
                $location.path("/")
            })
            .catch(function(error) {
                console.log("Lỗi khi cập nhật sách:", error);
            });
    }
}