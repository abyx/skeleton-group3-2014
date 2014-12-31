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

    $scope.AddPerson = function() {
        console.log("in add person");
        var checkedParties = $scope.parties.filter(function(element){return element.isChecked});
        console.log(checkedParties);
        if (checkedParties[0] != null)
        {
            AddEntityService.addPerson(checkedParties[0].name, $scope.model.text);
            console.log("add person ", $scope.model.text, " to party ", checkedParties[0].name);
        }
    };

    $scope.AddWord = function() {
        AddEntityService.AddWord(($scope.model.text));
    };


});
