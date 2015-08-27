angular.module('tickerApp').factory('logInService', logInService);

logInService.$inject = ['$resource'];

function logInService($resource) {
    return $resource('http://localhost:8484/TickerCore/rest/loginEndpoint', {}, {
        create: {
            method: 'POST'
        }
    })
}