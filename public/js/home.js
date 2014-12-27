angular.module('app').controller('HomeCtrl', function($scope) {
  $scope.greeting = 'World';

  $scope.model = {
    text: ''
  };

  $scope.buttonClicked = function() {
    if ($scope.model.text === '') {
      alert('Please enter text in the input field');
    } else {
      alert('Heya, ' + $scope.model.text);
    }
  };
});
