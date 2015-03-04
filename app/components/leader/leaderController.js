angular.module('tickerApp').controller('facilitatorLeaderController',['$scope','$location','CountryFactory','CityFactory', function ($scope,$location,CountryFactory,CityFactory) {
    $scope.selectedCountry = false;
    $scope.countries = [];
    CountryFactory.create({}, function (country) {
        $scope.countries = country.countryDTOs;
    })

    $scope.grabCities = function() {
        console.log($scope.selectedCountry.name);
        if(!$scope.selectedCountry){ return; }
        CityFactory.create({"countryDTO":{"country_id": $scope.selectedCountry.country_id}}, function (city) {
            $scope.cities = city.cityDTOs;
        })

    };

}]);


angular.module('tickerApp').controller('getCitiesController',['$scope','CityFactory', function($scope,CityFactory) {
    $scope.selectedCity = false;
    $scope.cities = [];

}]);

