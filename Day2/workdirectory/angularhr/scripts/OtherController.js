/**
 * Created by Alexandra.Soare on 6/28/2017.
 */
angular.module('hrApp').controller('OtherController',['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.setTitle = function () {
      $scope.title = 'Second Title';
    };
}]);