angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .when('/AddPartyView/:argument?', {
      templateUrl: 'AddPartyView.html',
      controller: 'AddPartyViewCtrl'
    })
    .when('/view2', {
      templateUrl: 'view2.html',
      controller: 'View2Ctrl'
    })
    .otherwise({redirectTo: '/'});
});
