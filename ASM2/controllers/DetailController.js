window.DetailController = function ($scope, $http, $routeParams) {
    $scope.title = "Trang detail"
    // Call API: GET, POST, PUT/PATCH, DELETE
    let urlCategory = "http://localhost:3000/category"
    let urlProduct = "http://localhost:3000/products"


        // load Category lên select option
        $http.get(urlCategory)
            .then(function (response) {
                $scope.category = response.data

                $http.get(urlProduct + "/" + $routeParams.id)
                .then(function (response) {
                    $scope.products = response.data
                })
                .then(function () {
                    
                        let cate = $scope.category.find(function (cate) {
                            return $scope.products.category_id == cate.id
                        })
                        if (cate) {
                            $scope.products.cateName = cate.name
                        }
                
                })
            })

        // load post theo id lên form
        
console.log($scope.products)

}
