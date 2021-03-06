
// create the controller and inject Angular's $scope

angular.module('tickerApp').controller('logInController',logInController);

logInController.$inject = ['$scope','$location','logInService'];

function logInController($scope,$location,logInService){
    
    $scope.save = function(){
            logInService.create({personDTO:{"mail": $scope.email, "password": $scope.password}}, function (userFactory) {        
                if(userFactory.personDTO.personType == "Facilitator leader"){
                    $location.path('/administrative')
                    angular.element('#loginClose').trigger('click');
                }
            })
    }; // end save  
    
}


