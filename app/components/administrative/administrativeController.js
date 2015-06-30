angular.module('tickerApp').controller('administrativeController',administrativeController);

administrativeController.$inject = ['$scope','$rootScope','$location','companyFactory','countryFactory','cityFactory'];

function administrativeController($scope,$rootScope,$location,companyFactory,countryFactory,cityFactory){
    
    $scope.changeAdminAction = function(section){
         if(section == "company"){
             $scope.template = '/app/components/administrative/sections/company/companyView.html';
         }
         if(section == "team"){
             $scope.template = '/app/components/administrative/sections/team/teamView.html';
         }
    }; // end save  
       
}
