hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    },
        {
            url: "#/employeeadd",
            label: "Add employee"
        }];


    $scope.currentDate = new Date();

}]);
