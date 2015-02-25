/**
 * Created by gnewball on 09/07/2014.
 */

function Hello($scope, $http) {
    $http.defaults.headers.common;
    $http.get('http://localhost:8181/TickerCore/rest/hello').
        success(function(data) {
            $scope.greeting = data;
        });
}
