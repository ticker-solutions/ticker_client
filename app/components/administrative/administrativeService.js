
angular.module('tickerApp').factory('companyFactory', companyFactory);

companyFactory.$inject = ['$resource'];

function companyFactory($resource) {
    return $resource('http://localhost:8484/TickerCore/rest/companyEndpoint', {}, {
        getAllCompanies: {
            method: 'GET'
        },
        createCompany: {
            method: 'PUT'
        },
        getAllCompaniesByCity: {
            method: 'POST'
        }
    })
}

angular.module('tickerApp').factory('countryFactory', countryFactory);

countryFactory.$inject = ['$resource'];

function countryFactory($resource) {
    return $resource('http://localhost:8484/TickerCore/rest/countryEndpoint', {}, {
        getAllCountries: {
            method: 'GET'
        }
    })
}

angular.module('tickerApp').factory('cityFactory', cityFactory);

cityFactory.$inject = ['$resource'];

function cityFactory($resource) {
    return $resource('http://localhost:8484/TickerCore/rest/cityEndpoint', {}, {
        getAllCitiesByCountry: { 
            method: 'POST' 
        }
    })
}

angular.module('tickerApp').factory('teamFactory', teamFactory);

teamFactory.$inject = ['$resource'];

function teamFactory($resource) {
    return $resource('http://localhost:8484/TickerCore/rest/teamEndpoint', {}, {
        getAllTeams: {
            method: 'GET' 
        },
        createTeam: {
            method: 'PUT' 
        },
        getAllTeamsByCompany: {
            method: 'POST'
        }
        
    })
}

angular.module('tickerApp').factory('personFactory', personFactory);

personFactory.$inject = ['$resource'];

function personFactory($resource) {
    return $resource('http://localhost:8484/TickerCore/rest/personEndpoint', {}, {
        getPeopleByTeam: {
            method: 'POST'
        }        
    })
}



