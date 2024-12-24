window.UpdateCateController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Cập nhật danh mục";

    // End points (API)
    let urlCategory = "http://localhost:3000/category";

    // Dữ liệu trên form
    $scope.category = {
        id: "",
        name: ""
    };

    // Hàm khởi tạo
    function init() {
        let categoryId = $routeParams.id;
        
        $http.get(urlCategory + "/" + categoryId)
            .then(function (response) {
                $scope.category = response.data;
            })
            .catch(function (error) {
                console.error("Lỗi khi lấy chi tiết danh mục:", error);
            });
    }

    init();

    // Hàm cập nhật category
    $scope.updateCategory = function () {
        if (!$scope.category.name) {
            alert("Vui lòng nhập tên danh mục.");
            return;
        }

        $http.put(urlCategory + "/" + $scope.category.id, $scope.category)
            .then(function () {
                alert("Cập nhật danh mục thành công");
                $location.path("/list"); // Chuyển hướng về trang danh sách
            })
            .catch(function (error) {
                console.error("Lỗi khi cập nhật danh mục:", error);
            });
    };
};
