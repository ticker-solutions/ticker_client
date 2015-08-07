angular.module('tickerApp').controller('howDoWeDoThingsController',['$scope',function($scope) {
    
    

 
    $scope.changeActiveButton = function(buttonId) {
        $('#serviceButtonList').children().each(function(i) { 
            //$(this).children().attr('class','');
            
            var idValue = $(this).children().attr("id");
            if(idValue==buttonId && idValue=="dream"){
                $('#'+buttonId).attr('class','lat-btn-dreams active');
                $('#healthy').attr('class','lat-btn-winner');
            }
            
            if(idValue==buttonId && idValue=="healthy"){
                $('#'+buttonId).attr('class','lat-btn-winner active');
                $('#dream').attr('class','lat-btn-dreams');
            }
        });  
        
       // $('#'+id).attr('class','active');
    };
    
    
}]);