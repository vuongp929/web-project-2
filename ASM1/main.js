var myApp = angular.module('myApp', []);


myApp.controller("myController", $scope =>{
    init()
  

// Thêm dữ liệu
    $scope.myFun = function(){
        if(validate()){
            return;
        }

        let PD = {
            id: $scope.id,
            name: $scope.name,
            image: "../images/" + $scope.image,
            price: $scope.price,
            brand: $scope.brand,
            discount: $scope.discount
        }
        $scope.products.push(PD)
        clear();
        saveToStorage()
    }



    
    function clear(){
        $scope.id = "";
        $scope.name = "";
        $scope.image = "";
        $scope.price = "";
        $scope.brand = "";
        $scope.discount = "";
    }

    function init(){
        $scope.products = [];
        
        $scope.statusErrorId= false;
        $scope.messageErrorId= "";
        
        $scope.statusErrorName= false;
        $scope.messageErrorName= "";

        $scope.statusErrorImage= false;
        $scope.messageErrorImage= "";

        $scope.statusErrorPrice= false;
        $scope.messageErrorPrice= "";

        $scope.statusErrorBrand= false;
        $scope.messageErrorBrand= "";

        $scope.statusErrorDiscount= false;
        $scope.messageErrorDiscount= "";

        $scope.indexUpdate = -1;

        // load old data 
        if(localStorage.getItem("products")){
        let storage = localStorage.getItem("products")
        $scope.products = JSON.parse(storage);
        }

    }

    function validate(){
        if( $scope.id == undefined || $scope.id == ""){
            $scope.statusErrorId= true;
            $scope.messageErrorId= "Please enter the id";
       } else{
            $scope.statusErrorId= false;
            $scope.messageErrorId= "";
       }

       if( $scope.name == undefined || $scope.name == ""){
            $scope.statusErrorName= true;
            $scope.messageErrorName= "Please enter the name";
       } else{
            $scope.statusErrorName= false;
            $scope.messageErrorName= "";
       }

       if( $scope.image == undefined || $scope.image == ""){
            $scope.statusErrorImage= true;
            $scope.messageErrorImage= "Please enter the image name";
       } else{
            $scope.statusErrorImage= false;
            $scope.messageErrorImage= "";
       }       

       if( $scope.price == undefined || $scope.price == ""){
            $scope.statusErrorPrice= true;
            $scope.messageErrorPrice= "Please enter the price";
        } else{
            $scope.statusErrorPrice= false;
            $scope.messageErrorPrice= "";
        }

        if( $scope.brand == undefined || $scope.brand == ""){
            $scope.statusErrorBrand= true;
            $scope.messageErrorBrand= "Please enter the brand ";
            } else{
            $scope.statusErrorBrand= false;
            $scope.messageErrorBrand= "";
        }

        if( $scope.discount == undefined || $scope.discount == ""){
            $scope.statusErrorDiscount= true;
            $scope.messageErrorDiscount= "Please enter the discount";
            } else{
            $scope.statusErrorDiscount= false;
            $scope.messageErrorDiscount= "";
        }
    }

// Xóa dữ liệu   
    $scope.removeProduct = function(index){
        if(confirm("Are you sure you want to remove this product?")){
            $scope.products.splice(index, 1);
            saveToStorage()
        }
    }
// Sửa dữ liệu    
    $scope.updateProduct = function(index){
            $scope.id = $scope.products[index].id
            $scope.name = $scope.products[index].name
            $scope.image = $scope.products[index].image.replace('../images/', '')
            $scope.price = $scope.products[index].price
            $scope.brand = $scope.products[index].brand
            $scope.discount = $scope.products[index].discount

            $scope.indexUpdate = index
    }
    
    
    $scope.comeBack = function() {
        $scope.indexUpdate = -1;
        clear();
        saveToStorage()
    }

    $scope.editProduct = function() {
        if(validate()){
            return;
        }
        let PD = {
            id: $scope.id,
            name: $scope.name,
            image: "../images/" + $scope.image,
            price: $scope.price,
            brand: $scope.brand,
            discount: $scope.discount
        }
        $scope.products[$scope.indexUpdate] = PD;
        $scope.comeBack();
    }

    //JSON.stringify // chuyển dât => JSON
    //JSON.parse // chuyển JSON => data

    function saveToStorage(){
        localStorage.removeItem("products");

        arr = [];
        $scope.products.forEach(item => {
            arr.push(angular.copy(item));
        })
        let json = JSON.stringify(arr);
        localStorage.setItem('products', json);
    }
})

myApp.controller("productDetailController", ['$scope', '$location', function($scope, $location) {

    const queryParams = new URLSearchParams(window.location.search);
    const productId = parseInt(queryParams.get('id'));

    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    $scope.product = products.find(product => product.id === productId);

    if (!$scope.product) {
        alert('Không tìm thấy sản phẩm với ID này');
    }
}]);

var myCarousel = document.querySelector('#carouselExampleInterval')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
