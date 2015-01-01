angular.module('app').controller('AddPartyViewCtrl', function($scope, AddEntityService, PartiesSrv, WordsSrv) {
  // Nothing here for now

    $scope.model = {
        text: '',
        radioValue:''
    };

    $scope.parties = [];

    refreshPartyView($scope, PartiesSrv, WordsSrv);

    $scope.AddParty = function() {
        AddEntityService.addEntity($scope.model.text).success(
            function(data, status, headers, config)
            {
                console.log('got response',data);
                refreshPartyView($scope, PartiesSrv, WordsSrv);
            })
    };

    $scope.AddPerson = function() {
        console.log("in add person");
        var checkedParties = $scope.parties.filter(function(element){return element.isChecked});
        console.log(checkedParties);
        if (checkedParties[0] != null)
        {
            AddEntityService.addPerson(checkedParties[0].name, $scope.model.text).success(
                function(data, status, headers, config)
                {
                    console.log('got response',data);
                    refreshPartyView($scope, PartiesSrv, WordsSrv);
                });
            console.log("add person ", $scope.model.text, " to party ", checkedParties[0].name);
        }
    };

    $scope.AddWord = function() {
        AddEntityService.AddWord($scope.model.text);
    };
});

function refreshPartyView($scope, PartiesSrv, WordsSrv)
    {
        console.log('Refresh');
        PartiesSrv.getAll().then(
            function(response){
                $scope.parties = response;
            },
            function(error){
                console.log('error getting parties');
            });

        WordsSrv.getWords().then(
            function(response){
                $scope.words = response;
            },
            function(error){
                console.log('error getting words');
            });

    }

