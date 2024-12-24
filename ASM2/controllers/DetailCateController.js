window.DetailCateController = function ($scope, $http, $routeParams) {
    $scope.title = "Chi tiết danh mục";

    // End points (API)
    let urlCategory = "http://localhost:3000/category";

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
};
