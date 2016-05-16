(function(){

    var app = angular.module('timeTrackingModule', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'loginController',
                templateUrl: 'Views/login.html'
            })
            .when('/mypage/:customerName', {
                controller: 'employeeController',
                templateUrl: 'Views/employeepage.html'
            })
            .otherwise({
                redirectTo: '/otherwise'
            });
    });

}());