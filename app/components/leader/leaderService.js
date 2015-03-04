angular.module('tickerApp').factory('CountryFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/countryEndpoint', {}, {
        create: { method: 'GET' }
    })
});

angular.module('tickerApp').factory('CityFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/cityEndpoint', {}, {
        create: { method: 'POST' }
    })
});

angular.module('tickerApp').factory('CompanyFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/companyEndpoint', {}, {
        create: { method: 'POST' }
    })
});