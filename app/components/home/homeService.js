

angular.module('tickerApp').factory('UserFactory', function ($resource) {
    return $resource('http://localhost:8080/TickerCore/rest/personEndpoint', {}, {
        create: { method: 'POST' }
    })
});


