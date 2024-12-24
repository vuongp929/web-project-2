window.ListCateController = function ($scope, $http) {
    $scope.title = "Danh sách danh mục";

    // End points (API)
    let urlCategory = "http://localhost:3000/category";

    // Hàm khởi tạo
    function init() {
        // Lấy danh sách category
        $http.get(urlCategory)
            .then(function (response) {
                $scope.categories = response.data;
            })
            .catch(function (error) {
                console.error("Lỗi khi lấy danh sách danh mục:", error);
            });
    }

    init();

    // Hàm xóa category
    $scope.deleteCategory = function (id) {
        let check = confirm("Bạn có chắc chắn muốn xóa danh mục này không?");
        if (check) {
            $http.delete(urlCategory + "/" + id)
                .then(function () {
                    alert("Xóa danh mục thành công");
                    init(); // Làm mới danh sách sau khi xóa
                })
                .catch(function (error) {
                    console.error("Lỗi khi xóa danh mục:", error);
                });
        }
    };
};
