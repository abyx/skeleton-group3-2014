angular.module('app').controller('View2Ctrl', function($scope,statisticSrv) {

    $scope.buttonClicked = function() {

        $scope.model.mandat = statisticSrv.getMandatsNo4Party($scope.model.text);

    };



});



