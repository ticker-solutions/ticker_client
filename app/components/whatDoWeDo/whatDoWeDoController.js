angular.module('tickerApp').controller('whatDoWeDoController',['$scope',function($scope) {
 
    $scope.relational_competence = "interna-teoria.png";
    $scope.legitimarseClass="theory-button theChickenLove_font";
    $scope.compromisosClass="theory-button theChickenLove_font";
    $scope.escucharnosClass="theory-button theChickenLove_font";
    $scope.inferenciasClass="theory-button theChickenLove_font";    
    
    $scope.loadTickerInfograma = function(competence) {
        if(competence == 'legitimarse'){
            $scope.relational_competence = "interna-teoria-1.png";
            $scope.legitimarseClass="theory-button theChickenLove_font active";
            $scope.compromisosClass="theory-button theChickenLove_font";
            $scope.escucharnosClass="theory-button theChickenLove_font";
            $scope.inferenciasClass="theory-button theChickenLove_font";
        }else if(competence == 'compromisos'){
            $scope.relational_competence = "interna-teoria-2.png";
            $scope.legitimarseClass="theory-button theChickenLove_font";
            $scope.compromisosClass="theory-button theChickenLove_font active";
            $scope.escucharnosClass="theory-button theChickenLove_font";
            $scope.inferenciasClass="theory-button theChickenLove_font";
        }else if(competence == 'escucharnos'){
            $scope.relational_competence = "interna-teoria-3.png";
            $scope.escucharnosClass="theory-button theChickenLove_font active";
            $scope.legitimarseClass="theory-button theChickenLove_font";
            $scope.compromisosClass="theory-button theChickenLove_font";            
            $scope.inferenciasClass="theory-button theChickenLove_font";
        }else if(competence == 'inferencias'){
            $scope.relational_competence = "interna-teoria-4.png";
            $scope.inferenciasClass="theory-button theChickenLove_font active";
            $scope.escucharnosClass="theory-button theChickenLove_font";
            $scope.legitimarseClass="theory-button theChickenLove_font";
            $scope.compromisosClass="theory-button theChickenLove_font";                        
        }
    };
    
    $scope.appliedClass = function(myObj) {
        if (myObj.someValue === "1") {
            return "theory-button theChickenLove_font active";
        } else {
            return "theory-button theChickenLove_font"; // Or even "", which won't add any additional classes to the element
        }
    }
        
}]);