var myApp = angular.module('myApp',[]);

myApp.controller("myController", $scope =>{
    init()
  

// Thêm dữ liệu
    $scope.myFun = function(){
        if(validate()){
            return;
        }

        let SV = {
            id: $scope.counter,
            name: $scope.name,
            address: $scope.address,
            phone: $scope.phone
        }
        $scope.students.push(SV)
        $scope.counter++;
        clear();
        saveToStorage()
    }

    function clear(){
        $scope.name = "";
        $scope.address = "";
        $scope.phone = "";
    }

    function init(){
        $scope.students = [];
        $scope.counter = 1;
        
        $scope.statusErrorName= false;
        $scope.messageErrorName= "";

        $scope.statusErrorAddress= false;
        $scope.messageErrorAddress= "";

        $scope.statusErrorPhone= false;
        $scope.messageErrorPhone= "";

        $scope.indexUpdate = -1;

        // load old data 
        if(localStorage.getItem("students")){
        let storage = localStorage.getItem("students")
        $scope.students = JSON.parse(storage);
        }

    }

    function validate(){
       if( $scope.name == undefined || $scope.name == ""){
            $scope.statusErrorName= true;
            $scope.messageErrorName= "Please enter your name";
       } else{
            $scope.statusErrorName= false;
            $scope.messageErrorName= "";
       }

       if( $scope.address == undefined || $scope.address == ""){
            $scope.statusErrorAddress= true;
            $scope.messageErrorAddress= "Please enter your address";
        } else{
            $scope.statusErrorAddress= false;
            $scope.messageErrorAddress= "";
        }

        if( $scope.phone == undefined || $scope.phone == ""){
            $scope.statusErrorPhone= true;
            $scope.messageErrorPhone= "Please enter your phone number";
            } else{
            $scope.statusErrorPhone= false;
            $scope.messageErrorPhone= "";
        }
    }

// Xóa dữ liệu   
    $scope.removeStudent = function(index){
        if(confirm("Are you sure you want to remove this student")){
            $scope.students.splice(index, 1);
            saveToStorage()
        }
    }
// Sửa dữ liệu    
    $scope.updateStudent = function(index){
            $scope.id = $scope.students[index].id
            $scope.name = $scope.students[index].name
            $scope.address = $scope.students[index].address
            $scope.phone = $scope.students[index].phone

            $scope.indexUpdate = index
    }
    
    
    $scope.comeBack = function() {
        $scope.indexUpdate = -1;
        clear();
        saveToStorage()
    }

    $scope.editStudent = function() {
        if(validate()){
            return;
        }
        let sv = {
            id: $scope.id,
            name: $scope.name,
            address: $scope.address,
            phone: $scope.phone
        }
        $scope.students[$scope.indexUpdate] = sv;
        $scope.comeBack();
    }

    //JSON.stringify // chuyển dât => JSON
    //JSON.parse // chuyển JSON => data

    function saveToStorage(){
        localStorage.removeItem("students");

        arr = [];
        $scope.students.forEach(item => {
            arr.push(angular.copy(item));
        })
        let json = JSON.stringify(arr);
        localStorage.setItem('students', json);
    }
})

