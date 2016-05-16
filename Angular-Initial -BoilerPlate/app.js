(function(){

    var app = angular.module('timeTrackingModule', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'LoginController',
                templateUrl: 'Views/login.html'
            })
            .when('/mypage', {
                controller: 'employeePageController',
                templateUrl: 'Views/employeepage.html'
            })
            .otherwise({
                redirectTo: '/otherwise'
            });
    });

}());