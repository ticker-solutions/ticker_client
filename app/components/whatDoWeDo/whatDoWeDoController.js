angular.module('tickerApp').controller('whatDoWeDoController',['$scope',function($scope) {
 
    $scope.relational_competence = "interna-teoria-1.png";
    
    $scope.loadTickerInfograma = function(competence) {
        if(competence == 'legitimarse'){
            $scope.relational_competence = "interna-teoria-2.png";
        }else{
            alert('');
        }
    };
        
}]);