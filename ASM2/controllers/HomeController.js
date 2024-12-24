window.HomeController = function ($scope, $http) {
    $scope.title = "Trang Home"
    // Call API: GET, POST, PUT/PATCH, DELETE
    let urlCategory = "http://localhost:3000/category"
    let urlProduct = "http://localhost:3000/products"

    $http.get(urlCategory)
        .then(function (response) {
            $scope.category = response.data // Category
        })
        .then(function () {
            $http.get(urlProduct)
                .then(function (response) {
                    $scope.data = response.data // Products
                })
                .then(function () {
                    $scope.data.forEach(product => {
                        let cate = $scope.category.find(function (cate) {
                            return product.category_id == cate.id
                        })
                        if (cate) {
                            product.cateName = cate.name
                        }
                    })
                })
        })

}