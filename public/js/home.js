angular.module('app').controller('HomeCtrl', function($scope) {
  $scope.greeting = 'Welcome to';

  $scope.model = {
    text: '',
    mandat: '0'
  };

  $scope.buttonClicked = function() {
    if ($scope.model.text === '') {
      alert('Please enter text in the input field');
    } else {
      alert('Heya, ' + $scope.model.text);
    }
  };
});
