var description1 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit tortor felis, a ullamcorper erat semper sed. Vestibulum tincidunt eleifend lacus, maximus interdum urna accumsan maximus. Nulla facilisi. Pellentesque imperdiet ut erat venenatis convallis. Proin efficitur ante vel luctus maximus. Mauris sagittis nibh vitae augue suscipit, volutpat commodo augue commodo. Aenean vel venenatis erat, et iaculis ipsum.";

var description2 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit tortor felis, a ullamcorper erat semper sed. Vestibulum tincidunt eleifend lacus, maximus interdum urna accumsan maximus. Nulla facilisi. Pellentesque imperdiet ut erat venenatis convallis. Proin efficitur ante vel luctus maximus. Mauris sagittis nibh vitae augue suscipit.";

var description3 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit tortor felis, a ullamcorper erat semper sed. Vestibulum tincidunt eleifend lacus";


var tickerMemberData = {};
tickerMemberData['1'] = {name: 'Garry',    lastName: 'Newball',  position: 'Lider de producto', photo: 'assets/img/imageBgAboutUs.png', description: description1};
tickerMemberData['2'] = {name: 'Yvonne',   lastName: 'Guerrero', position: 'Dibujante', photo: 'assets/img/imageBgAboutUs.png', description: description2};
tickerMemberData['3'] = {name: 'Veronica', lastName: 'Giraldo',  position: 'Facilitadora', photo: 'assets/img/imageBgAboutUs.png', description: description3};



angular.module('tickerApp').controller('getPinTickerMembersController',['$scope',function($scope) {
    $scope.tickerMembersNames = {"1": "Garry",
    "2": "Yvonne",
    "3": "Veronica",
    };  
    
    
    $scope.name = tickerMemberData[1].name;
    $scope.lastName = tickerMemberData[1].lastName;
    $scope.position = tickerMemberData[1].position;
    $scope.photo = tickerMemberData[1].photo;
    $scope.description = tickerMemberData[1].description;
    
 
    $scope.loadTickerMemberData = function(id) {
        $('#tickerMemberListId').children().each(function(i) { 
            $(this).children().attr('class','');
        });       
        $('#'+id).attr('class','active');
        $scope.name = tickerMemberData[id].name;
        $scope.lastName = tickerMemberData[id].lastName;
        $scope.position = tickerMemberData[id].position;
        $scope.photo = tickerMemberData[id].photo;
        $scope.description = tickerMemberData[id].description;
    };
    
    
}]);