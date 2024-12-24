window.AddController = function ($scope, $http, $location) {
    $scope.title = "Trang thêm mới"
    // End points (API)
    let urlUser = "http://localhost:3000/users"
    let urlPost = "http://localhost:3000/posts"

    // Hàm khởi tạo
    function init() {
        // Lấy danh sách user
        $http.get(urlUser)
            .then(function (response) {
                $scope.users = response.data
            })
            .catch(function (error) {
                console.log(error)
            })

        // Dữ liệu trên form
        $scope.post = {
            userId: "",
            title: "",
            body: ""
        }

        // Khởi tạo validate
        $scope.errStatusUserId = false
        $scope.errMesUserId = ""
    }

    init()


    $scope.addPost = function () {
        if (!validate()) {
            $http.post(urlPost, $scope.post)
                .then(function () {
                    alert("Thêm mới thành công")
                    $location.path("/")
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }



    function validate() {
        if ($scope.post.userId == "") {
            $scope.errStatusUserId = true
            $scope.errMesUserId = "Vui lòng chọn User"
        } else {
            $scope.errStatusUserId = false
            $scope.errMesUserId = ""
        }

        return $scope.errStatusUserId
    }
}