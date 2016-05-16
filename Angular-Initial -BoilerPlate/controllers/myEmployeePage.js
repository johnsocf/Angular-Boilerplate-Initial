/**
 * Created by cat on 5/16/16.
 */
(function() {

    var employeePageController = function ($scope) {
        console.log('employeePageController:oaded');
        $scope.name = 'cat';
    };

    employeePageController.$inject = ['$scope'];

    angular.module('timeTrackingModule')
        .controller('EmployeePageController', employeePageController);

})();