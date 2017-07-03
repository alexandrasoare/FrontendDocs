/**
 * Created by Alexandra.Soare on 6/30/2017.
 */
angular.module('hrApp').controller('FormsController', ['$scope', function($scope) {
    $scope.vb = false;
    $scope.submit = function () {
      //  if( $scope.myForm.$valid == true)
            $scope.vb = $scope.myForm.$valid;
    }
}]);