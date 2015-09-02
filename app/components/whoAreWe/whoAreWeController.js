var description1 = "Me apasiona materializar ideas que generen impacto social a traves del software.<br><br>Creo profundamente que los equipos de trabajo pueden mejorar su rendimiento a traves del fortalecimiento de sus relaciones.<br><br>Mi compromiso es facilitarle a las personas herramientas que les permitan plasmar y perseguir sus sueños.";

var description2 = "";

var description3 = "Cuando somos niños todos dibujamos, es una forma transparente de expresarnos. Yo nunca lo deje de hacer. Ahora como diseñadora sigue siendo mi mayor herramienta de comunicación.<br><br>Mi  compromiso es hacer que las lineas que salen de mis manos puedan ayudar a plasmar sueños para tenerlos siempre a la vista y así hacerlos realidad.";

var description4 = "Desde hace un buen tiempo siento una gran pasión por el arte y la tecnología, y ahora que me encuentro en la capacidad de desarrollar ciertas herramientas mi meta se enfoca en que éstas puedan llegar a tener un impacto social que cambie vidas y genere avance.<br><br>Creo entonces en todas aquellas ideas que buscan dejar algo en los demás, que buscan transcender, y sobre todo, que al innovar sobre lo tradicional, inspiran al cambio.";


var tickerMemberData = {};
tickerMemberData['1'] = {name: 'Garry',    lastName: 'Newball',  position: 'Lider de producto', photo: 'assets/img/garry.png', description: description1};
tickerMemberData['2'] = {name: 'Carolina', lastName: 'Henao',  position: 'Facilitadora', photo: 'assets/img/imageBgAboutUs.png', description: description2};
tickerMemberData['3'] = {name: 'Yvonne',   lastName: 'Guerrero', position: 'Dibujante', photo: 'assets/img/yvonne.png', description: description3};
tickerMemberData['4'] = {name: 'Richard',   lastName: 'Mejia', position: 'Desarrollador', photo: 'assets/img/imageBgAboutUs.png', description: description4};



angular.module('tickerApp').controller('getPinTickerMembersController',['$scope',function($scope) {
    $scope.tickerMembersNames = {"1": "Garry",
    "2": "Caro",
    "3": "Yvonne",
    "4": "Richard",
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