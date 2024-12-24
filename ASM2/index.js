var myApp = angular.module("myApp", ['ngRoute'])
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/list.html',
            controller: ListController
        })
        .when("/add-products", {
            templateUrl: 'views/add.html',
            controller: AddController
        })
        .when("/detail-products/:id", {
            templateUrl: 'views/products/product-detail.html',
            controller: DetailController
        })
        .when("/update-products/:id", {
            templateUrl: 'views/update.html',
            controller: UpdateController
        })
        .when("/list", {
            templateUrl: 'views/list-category.html',
            controller: ListCateController
        })
        .when("/add-category", {
            templateUrl: 'views/add-category.html',
            controller: AddCateController
        })
        .when("/update-category/:id", {
            templateUrl: 'views/update-category.html',
            controller: UpdateCateController
        })
        .when("/home", {
            templateUrl: 'views/products/home.html',
            controller: HomeController
        })
        .otherwise({
            redirectTo: '/'
        })
})

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
