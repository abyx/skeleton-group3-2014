angular.module('app').controller('View2Ctrl', function($scope,statisticSrv) {

    $scope.buttonClicked = function() {

        statisticSrv.getMandatsNo4Party($scope.model.text).then(
            function(mandat){
                $scope.model.mandat = mandat
                console.log(mandat);}
        );

    };



});



