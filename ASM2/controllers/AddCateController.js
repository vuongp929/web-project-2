window.AddCateController = function ($scope, $http, $location) {
    $scope.title = "Thêm mới danh mục";

    // End points (API)
    let urlCategory = "http://localhost:3000/category";

    function init(){
        // Dữ liệu trên form
        $scope.category = {
            name: ""
        };
    }
    
    init()

    // Hàm thêm mới category
    $scope.addCategory = function () {
        //if (!validate()) {
        

        $http.post(urlCategory, $scope.category)
            .then(function () {
                alert("Thêm mới danh mục thành công");
                $location.path("/list"); // Chuyển hướng về trang danh sách
            })
            .catch(function (error) {
                console.error("Lỗi khi thêm mới danh mục:", error);
            });
        //}
    };
};
