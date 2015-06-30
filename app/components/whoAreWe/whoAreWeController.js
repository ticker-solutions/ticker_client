var description1 = "Me apasiona materializar ideas que generen impacto social a traves del software.<br><br>Creo profundamente que los equipos de trabajo pueden mejorar su rendimiento a traves del fortalecimiento de sus relaciones.<br><br>Mi compromiso es facilitarle a las personas herramientas que les permitan plasmar y perseguir sus sueños.";

var description2 = "Cuando somos niños todos dibujamos, es una forma transparente de expresarnos. Yo nunca lo deje de hacer. Ahora como diseñadora sigue siendo mi mayor herramienta de comunicación.<br><br>Mi  compromiso es hacer que las lineas que salen de mis manos puedan ayudar a plasmar sueños para tenerlos siempre a la vista y así hacerlos realidad.";

var description3 = " Una de mis más grandes pasiones es el ser humano, cómo se relaciona, se transforma y crece. Estoy convencida que cada ser tiene el potencial para ser, hacer, y proyectar lo que le genera felicidad y que como seres sociales podemos lograr un impacto masivo.<br><br>Como Antropóloga de profesión y Project Manager de ocupación, percibo el mundo con conciencia social pero sin desconocer nuestra inmersión colectiva en un mundo de negocios, productividad, éxito y satisfacción.<br><br>Mi compromiso es irradiar energía, para facilitar un camino de autoconocimiento de las potencialidades y sueños personales que se refleje en resultados grupales.";


var tickerMemberData = {};
tickerMemberData['1'] = {name: 'Garry',    lastName: 'Newball',  position: 'Lider de producto', photo: 'assets/img/garry.png', description: description1};
tickerMemberData['2'] = {name: 'Yvonne',   lastName: 'Guerrero', position: 'Dibujante', photo: 'assets/img/yvonne.png', description: description2};
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