/**
 * Created by Alexandra.Soare on 6/28/2017.
 */

angular.module('hrApp').controller('OperationsController',['$rootScope','$scope', function ($rootScope, $scope) {
    $scope.rez1 =0;
    $scope.rez2 =0;
    $scope.rez3 =0;
    $scope.rez4 =0;
    $scope.add = function () {
        $scope.rez1 = parseInt($scope.a) + parseInt($scope.b);
    };
    $scope.sub = function () {
        $scope.rez2 = parseInt($scope.a) - parseInt($scope.b);
    };
    $scope.mul = function () {
        $scope.rez3 = parseInt($scope.a) * parseInt($scope.b);
    };
    $scope.div = function () {
        $scope.rez4 = parseInt($scope.a) / parseInt($scope.b);
    };

}]);