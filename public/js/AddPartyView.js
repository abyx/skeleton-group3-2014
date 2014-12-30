angular.module('app').controller('AddPartyViewCtrl', function($scope, AddEntityService ) {
  // Nothing here for now

    $scope.model = {
        text: '',
        radioValue:''
    };

    $scope.AddEntityClicked = function() {
        if ($scope.model.radioValue === 'Party') {
            AddEntityService.addEntity(($scope.model.text));
        } else {
            alert('other');
        }
    };

});
