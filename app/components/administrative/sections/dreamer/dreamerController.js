angular.module('tickerApp').controller('dreamerController',dreamerController);

dreamerController.$inject = ['$scope','$location','companyFactory','teamFactory','personFactory'];

function dreamerController($scope,$location,companyFactory,teamFactory,personFactory){
    
    
    $scope.getAllCompanies = function () {
        $scope.loading = true;
        companyFactory.getAllCompanies(function (companies) {         
            $scope.companies = companies.companyDTOs;           
            $scope.loading = false;
        });
    };
    
        
    $scope.getAllTeamsByCompany = function () {
        $scope.loading = true;
        teamFactory.getAllTeamsByCompany({teamDTO: { companyDTO: { company_id: $scope.company.company_id}}},function (teams) {         
            $scope.teams = teams.teamDTOs;           
            $scope.loading = false;
        });
    };
    
    $scope.getPeopleByTeam = function () {
        $scope.loading = true;
        personFactory.getPeopleByTeam({personDTO: { personType: 'Dreamer'}, teamDTO: {team_id: $scope.team.team_id}},function (dreamers){  
            $scope.dreamers = dreamers.personDTOs;           
            $scope.loading = false;
        });
    };
    
    // Toggle the grid between add and normal mode
    $scope.toggleAddMode = function () {
        $scope.addMode = !$scope.addMode;
 
        // Default new item name is empty
        $scope.newDreaer.name = '';
    };
    
    
    $scope.getAllCompanies();
    
}