// configure our routes
angular.module('tickerApp').config(function($routeProvider) {
    $routeProvider

        // route for the about page
        .when('/', {
            templateUrl : 'landingPage.html'
        })

          // route for the about page
        .when('/administrative', {
            templateUrl : 'app/components/administrative/administrativeView.html',
            controller  : 'administrativeController'
        })
    
        // route for the about page
        .when('/whoAreWe', {
            templateUrl : 'app/components/whoAreWe/whoAreWe.html',
            controller  : 'getPinTickerMembersController'            
        })
    
        // route for the about page
        .when('/whatDoWeDo', {
            templateUrl : 'app/components/whatDoWeDo/whatDoWeDo.html',
            controller  : 'whatDoWeDoController'            
        })
    
        // route for the about page
        .when('/whoHasChose', {
            templateUrl : 'app/components/whoHasChoseDream/whoHasChoseDream.html',
            controller  : 'whoHasChoseDreamController'            
        })
    
        // route for the about page
        .when('/howDoWeDoThings', {
            templateUrl : 'app/components/howDoWeDoThings/howDoWeDoThings.html',
            controller  : 'howDoWeDoThingsController'            
        })
    


});