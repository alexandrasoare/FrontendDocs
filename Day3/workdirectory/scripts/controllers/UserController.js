/**
 * Created by Alexandra.Soare on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope','$location','UserService',  function($scope, $location,UserService ){

    $scope.listHide = false;
    $scope.user = {};
    $scope.users =  UserService.userList;;
    $scope.back = function () {
        $location.url('/');
    };
    $scope.reset = function () {
        $scope.user.firstName = "";
        $scope.user.lastName = "";
        $scope.user.id = undefined;
        $scope.user.age = undefined;
    };
    $scope.save= function () {
        UserService.save(angular.copy($scope.user));

    };
    $scope.showHide = function () {

        $scope.listHide ^= true;

    };
}]);