angular.module('tickerApp').factory('logInService', logInService);

logInService.$inject = ['$resource'];

function logInService($resource) {
    return $resource('http://ticker.solutions:8484/TickerCore-0.0.1-SNAPSHOT/rest/personEndpoint', {}, {
        create: {
            method: 'POST'
        }
    })
}