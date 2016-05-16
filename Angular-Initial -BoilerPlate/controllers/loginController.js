/**
 * Created by cat on 5/16/16.
 */
(function(){
    console.log('login here');

    var loginController = function($scope) {
        console.log('login controller loaded');
    };

    loginController.$inject = ['$scope'];

    angular.module('timeTrackingModule')
        .controller('LoginController', loginController);

}());
