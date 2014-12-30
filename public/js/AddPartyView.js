angular.module('app').controller('AddPartyViewCtrl', function($scope, AddEntityService, PartiesSrv ) {
  // Nothing here for now

    $scope.model = {
        text: '',
        radioValue:''
    };

    $scope.parties = [];

    PartiesSrv.getAll().then(
        function(response){
            $scope.parties = response;
        },
        function(error){
            console.log('error');
        });

    $scope.AddParty = function() {
        AddEntityService.addEntity(($scope.model.text));
    };

});
