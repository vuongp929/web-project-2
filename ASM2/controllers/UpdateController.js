window.UpdateController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Trang chỉnh sửa"
    let urlCategory = "http://localhost:3000/category"
    let urlProduct = "http://localhost:3000/products"

    function init() {
        // load Category lên select option
        $http.get(urlCategory)
            .then(function (response) {
                $scope.category = response.data
            })
        // load post theo id lên form
        $http.get(urlProduct + "/" + $routeParams.id)
            .then(function (response) {
                })
    }
    init()


    $scope.updateProduct = function () {
        $http.patch(urlProduct + "/" + $routeParams.id, $scope.products)
            .then(function () {
                alert("Chỉnh sửa thành công")
                $location.path("/")
            })
            .catch(function(error) {
                console.log("Lỗi khi cập nhật sách:", error);
            });
    }
}