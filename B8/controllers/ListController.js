window.ListController = function ($scope, $http) {
    $scope.title = "Trang danh sách"
    // Call API: GET, POST, PUT/PATCH, DELETE
    let urlUser = "http://localhost:3000/users"
    let urlPost = "http://localhost:3000/posts"

    $http.get(urlUser)
        .then(function (response) {
            $scope.users = response.data // Users
        })
        .then(function () {
            $http.get(urlPost)
                .then(function (response) {
                    $scope.data = response.data // Posts
                })
                .then(function () {
                    $scope.data.forEach(post => {
                        let user = $scope.users.find(function (user) {
                            return post.userId == user.id
                        })
                        if (user) {
                            post.userName = user.name
                        }
                    })
                })
        })


    $scope.btnDelete = function (id) {
        let check = confirm("Bạn có muốn xóa không")
        if (check) {
            $http.delete(urlPost + "/" + id)
                .then(function () {
                    alert("Xóa thành công")
                })
        }
    }
}