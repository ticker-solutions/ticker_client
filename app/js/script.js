// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute','ngResource','ui.bootstrap','dialogs']);


scotchApp.factory('UserFactory', function ($resource) {
    return $resource('https://intense-anchorage-8342.herokuapp.com/TickerCore/rest/personEndpoint', {}, {
        create: { method: 'POST' }
    })
});

scotchApp.factory('CompanyFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/companyEndpoint', {}, {
        create: { method: 'POST' }
    })
});

scotchApp.factory('CountryFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/countryEndpoint', {}, {
        create: { method: 'GET' }
    })
});

scotchApp.factory('CityFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/cityEndpoint', {}, {
        create: { method: 'GET' }
    })
});

scotchApp.factory('CreateCompanyFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/companyEndpoint', {}, {
        create: { method: 'POST' }
    })
});


// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/openModal', {
            template : ' ',
            controller  : 'logInController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'facilitatorLeaderController'
        })


});

// create the controller and inject Angular's $scope

scotchApp.controller('logInController', ['$scope','$location','UserFactory', function ($scope,$location,UserFactory) {
    UserFactory.create({"mail": $scope.name, "password": $scope.password}, function (userFactory) {
        if(userFactory.personType == "Facilitator leader"){
            $location.path('/about')
        }

    })
}]);

scotchApp.controller('facilitatorLeaderController',['$scope','$location','CountryFactory', function ($scope,$location,CountryFactory) {
    $scope.selectedCountry = null;
    $scope.countries = [];
    CountryFactory.create({}, function (country) {
        $scope.countries = country.countryDTOs;
    })
}]);


scotchApp.controller('getCitiesController',['$scope','CityFactory', function($scope,CityFactory) {
    $scope.selectedCity = null;
    $scope.cities = [];
    $scope.grabCities = function() {
        alert("fd");
        CityFactory.create({"countryDTO":{"country_id": $scope.selectedCountry.country_id}}, function (city) {
            $scope.cities = city.cityDTOs;
        })
    };

}]);


scotchApp.controller('mainController',function($scope,$rootScope,$timeout,$dialogs,$location){
    $scope.confirmed = 'You have yet to be confirmed!';
    $scope.name = '"Your name here."';
    $scope.password = '"password"';

    $scope.launch = function(which){
        var dlg = null;
        switch(which){

            // Error Dialog
            case 'error':
                dlg = $dialogs.error('This is my error message');
                break;

            // Wait / Progress Dialog
            case 'wait':
                dlg = $dialogs.wait(msgs[i++],progress);
                fakeProgress();
                break;

            // Notify Dialog
            case 'notify':
                dlg = $dialogs.notify('Something Happened!','Something happened that I need to tell you.');
                break;

            // Confirm Dialog
            case 'confirm':
                dlg = $dialogs.confirm('Please Confirm','Is this awesome or what?');
                dlg.result.then(function(btn){
                    $scope.confirmed = 'You thought this quite awesome!';
                },function(btn){
                    $scope.confirmed = 'Shame on you for not thinking this is awesome!';
                });
                break;

            // Create Your Own Dialog
            case 'create':
                dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
                dlg.result.then(function(person){
                    $scope.name = person.name;
                    $scope.password = person.password;
                    $location.path('/openModal')
                },function(){
                    $scope.name = 'You decided not to enter in your name, that makes me sad.';
                });

                break;
        }; // end switch
    }; // end launch

    // for faking the progress bar in the wait dialog
    var progress = 25;
    var msgs = [
        'Hey! I\'m waiting here...',
        'About half way done...',
        'Almost there?',
        'Woo Hoo! I made it!'
    ];
    var i = 0;

    var fakeProgress = function(){
        $timeout(function(){
            if(progress < 100){
                progress += 25;
                $rootScope.$broadcast('dialogs.wait.progress',{msg: msgs[i++],'progress': progress});
                fakeProgress();
            }else{
                $rootScope.$broadcast('dialogs.wait.complete');
            }
        },1000);
    }; // end fakeProgress

}) // end dialogsServiceTest
    .controller('whatsYourNameCtrl',function($scope,$modalInstance,data){
        $scope.user = {name : '', password: ''};

        $scope.cancel = function(){
            $modalInstance.dismiss('canceled');
        }; // end cancel

        $scope.save = function(){
            $modalInstance.close($scope.user);
        }; // end save

        $scope.hitEnter = function(evt){
            if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.name,null) || angular.equals($scope.name,'')))
                if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.password,null) || angular.equals($scope.password,'')))
                    $scope.save();

        }; // end hitEnter
    }) // end whatsYourNameCtrl
    .run(['$templateCache',function($templateCache){
        $templateCache.put('/dialogs/whatsyourname.html','<div class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> Login</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form"><div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"><label class="control-label" for="username">Usuario:</label><input type="text" class="form-control" name="username" id="username" ng-model="user.name" ng-keyup="hitEnter($event)" required><label class="control-label" for="password">Contrase&#241;a:</label><input type="password" class="form-control" name="password" id="password" ng-model="user.password" ng-keyup="hitEnter($event)" required><span class="help-block">Enter your full name, first &amp; last.</span></div></ng-form></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>');
    }]); // end run / module