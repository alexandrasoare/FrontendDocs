hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory, EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.employees = [];
        $scope.jobs = [];
        $scope.depts = [];
        $scope.managers = [];
        $scope.found = false;
        $scope.newEmployees = [];

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };


        // Handle a promise
        EmployeeService.findAllJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at employees/findAllJobs: " + err);
            });

        // Handle a promise
        EmployeeService.findAllDepts()
            .then(function (res) {
                $scope.depts = res.data;
            }, function (err) {
                console.log("Error at employees/findAllDepts: " + err);
            });

        // Handle a promise
        EmployeeService.findAllManagers()
            .then(function (res) {
                //$scope.managers = res.data;
                for(e in res.data) {
                    for(m in $scope.managers) {
                        if(res.data[e] != null && $scope.managers[m] != null && res.data[e].managerId != null)
                            if(res.data[e].managerId.employeeId == $scope.managers[m].employeeId) {
                                $scope.found = true;
                                break;
                            }
                    }
                    if($scope.found == false)
                        $scope.managers.push(res.data[e].managerId);
                    $scope.found = false;
                }

            }, function (err) {
                console.log("Error at employees/findAllManagers: " + err);
            });

        // Handle a promise
      /*  EmployeeService.deleteEmployee($routeParams.employeeId)
            .then(function (res) {
                $scope.employees = res.data;
            }, function (err) {
                console.log("Error at employees/deleteEmployees: " + err);
            });
*/

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);