// configure our routes
angular.module('tickerApp').config(function($routeProvider) {
    $routeProvider

        // route for the about page
        .when('/', {
            templateUrl : 'app/components/whatDoWeDo/whatDoWeDo.html'
        })

          // route for the about page
        .when('/leader', {
            templateUrl : 'app/components/leader/leaderView.html',
            controller  : 'facilitatorLeaderController'
        })
    
        // route for the about page
        .when('/whoAreWe', {
            templateUrl : 'app/components/whoAreWe/whoAreWe.html',
            controller  : 'getPinTickerMembersController'            
        })
    


});