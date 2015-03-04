// configure our routes
angular.module('tickerApp').config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/openModal', {
            template : ' ',
            controller  : 'logInController'
        })

        // route for the about page
        .when('/leader', {
            templateUrl : 'app/components/leader/leaderView.html',
            controller  : 'facilitatorLeaderController'
        })
    
        // route for the about page
        .when('/', {
            templateUrl : 'app/components/whatDoWeDo/whatDoWeDo.html',            
        })


});