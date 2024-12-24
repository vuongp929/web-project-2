var app = angular.module("myApp", [])

app.filter('genderStatus', function(){
    return function(input){
        return input == 1 ? "Nam" : "Nữ"
    }
})

app.filter('ageStatus', function(){
    return function(input, min, max){
        var output = [];
        input.forEach(item => {
            if(item.tuoi > min && item.tuoi < max){
                output.push(item);
            }
        });
        return output;
    }
})

app.controller("myController", function($scope){
    $scope.employee = [
        {
            nameNV: 'Hoàng',
            ngaysinhNV: new Date('12/3/2002'),
            luong: 2000000,
            gioitinh: 1,
            diachi: "Hà nội",
            tuoi: 21
        }, {
            nameNV: 'Hải',
            ngaysinhNV: new Date('5/20/2002'),
            luong: 5000000,
            gioitinh: 1,
            diachi: "Hải Phòng",
            tuoi: 21
        }, {
            nameNV: 'Hằng',
            ngaysinhNV: new Date('4/25/2002'),
            luong: 10000000,
            gioitinh: 2,
            diachi: "Hà nội",
            tuoi: 21
        }, {
            nameNV: 'Hiếu',
            ngaysinhNV: new Date('1/3/1992'),
            luong: 15000000,
            gioitinh: 1,
            diachi: "Quảng Ninh",
            tuoi: 31
        }, {
            nameNV: 'Duy',
            ngaysinhNV: new Date('1/3/1992'),
            luong: 25000000,
            gioitinh: 1,
            diachi: "Quảng Ninh",
            tuoi: 31
        }, {
            nameNV: 'Hoa',
            ngaysinhNV: new Date('1/3/1998'),
            luong: 5000000,
            gioitinh: 1,
            diachi: "Thái bình",
            tuoi: 25
        }, {
            nameNV: 'Phương',
            ngaysinhNV: new Date('1/3/2000'),
            luong: 4000000,
            gioitinh: 2,
            diachi: "Hà nội",
            tuoi: 23
        },
        {
            nameNV: 'A1',
            ngaysinhNV: new Date('1/3/2000'),
            luong: 4000000,
            gioitinh: 2,
            diachi: "Hà nội",
            tuoi: 23
        },
        {
            nameNV: 'A2',
            ngaysinhNV: new Date('1/3/2000'),
            luong: 4000000,
            gioitinh: 2,
            diachi: "Hà nội",
            tuoi: 23
        }
    ]
    
    $scope.columnName = "";
$scope.reverse = true;
$scope.sortData = function(columnName){

    if($scope.columnName == columnName){
        $scope.reverse = !$scope.reverse
    }else{
        $scope.columnName = columnName;
        $scope.reverse = true;
    }
}
})

