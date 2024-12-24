window.AddController = function ($scope, $http, $location) {
    $scope.title = "Trang thêm mới"
    // End points (API)
    let urlCategory = "http://localhost:3000/category"
    let urlProduct = "http://localhost:3000/products"

    // Hàm khởi tạo
    function init() {
        // Lấy danh sách category
        $http.get(urlCategory)
            .then(function (response) {
                $scope.category = response.data
            })
            .catch(function (error) {
                console.log(error)
            })

        // Dữ liệu trên form
        $scope.products = {
            name: "",
            price: "",
            image: "",
            categogy_id: ""

        }

        // Khởi tạo validate
    }

    init()


    $scope.addProduct = function () {
        //if (!validate()) {
            $http.post(urlProduct, $scope.products)
                .then(function () {
                    alert("Thêm mới thành công")
                    $location.path("/")
                })
                .catch(function (error) {
                    console.log(error)
                })
        //}
    }


    // validate
}