angular.module('tickerApp').controller('whatDoWeDoController',['$scope',function($scope) {
 
    
    $scope.changeActiveButton = function(buttonId) {
        $('#theoryButtonList').children().each(function(i) { 
            
            var idValue = $(this).children().attr("id");
            if(idValue==buttonId && idValue=="rr"){
                $('#'+buttonId).attr('class','lat-btn-rr active');
                $('#happiness').attr('class','lat-btn-happiness');
                $('#roi').attr('class','lat-btn-roi');
                $scope.theorySection = 'landingPage.html';
            }else if(idValue==buttonId && idValue=="happiness"){
                $('#'+buttonId).attr('class','lat-btn-happiness active');
                $('#rr').attr('class','lat-btn-rr');
                $('#roi').attr('class','lat-btn-roi');
                $scope.theorySection = '/app/components/whatDoWeDo/sections/resultsAndRelationships.html';
            }else if(idValue==buttonId && idValue=="roi"){
                $('#'+buttonId).attr('class','lat-btn-roi active');
                $('#rr').attr('class','lat-btn-rr');
                $('#happiness').attr('class','lat-btn-happiness');
            }
        });  
        
       // $('#'+id).attr('class','active');
    };
        $scope.theorySection = 'landingPage.html';
}]);