angular.module('app', ['ngRoute','nvd3','ngScrollbar']);

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
    .when('/forecast', {
      templateUrl: 'forecast.html',
      controller: 'ForecastCtrl'
    })
    .otherwise({redirectTo: '/'});
});
