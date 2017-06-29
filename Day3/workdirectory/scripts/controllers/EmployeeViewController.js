hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        $scope.employee = {};



        $scope.id = $routeParams.employeeid;

        $http.get(commonResourcesFactory.findOneEmployeeUrl + $scope.id)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        $scope.back = function() {
            $location.url('/employeeslist');
        }

    }]);