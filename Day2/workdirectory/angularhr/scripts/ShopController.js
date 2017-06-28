/**
 * Created by Alexandra.Soare on 6/28/2017.
 */
angular.module('hrApp').controller('ShopController',['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.imageList=[
        {
            name: "images/promo_5.png",
            prod: "rechin pe curcubeu",
            url: "",
            price: 1230,
            showPrice: false,
            id: 0
        },
        {
            name: "images/img2.jpg",
            prod: "casuta din brocoli",
            url: "",
            price: 234,
            showPrice: false,
            id: 1
        },
        {
            name: "images/images.png",
            prod: "cateluuuuuu",
            url: "",
            price: 229,
            showPrice: false,
            id: 2
        },
        {
            name: "images/MatRandom_03.jpg",
            prod: "gorilaaaa",
            url: "",
            price: 109,
            showPrice: false,
            id: 3
        }
    ]
    $scope.set = function(id) {
        $scope.imageList[parseInt(id)].showPrice = true;
    };
    $scope.clear = function(id) {
        $scope.imageList[parseInt(id)].showPrice = false;
    }
}]);
