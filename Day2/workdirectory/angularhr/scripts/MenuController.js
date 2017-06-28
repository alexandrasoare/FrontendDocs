/**
 * Created by Alexandra.Soare on 6/28/2017.
 */
angular.module('hrApp').controller('MenuController',['$scope', function ($scope) {
    $scope.demoActionList=[
        {
            label: "OtherScope",
            url: "viwes/childscope.html"
        },
        {
            label: "Demo actions",
            url: "demomath.html"
        },
        {
            label: "Shopping cart",
            url: "shoppingcart.html"
        }
    ];

}]);