angular.module('app', ['ngRoute','nvd3']);

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
      .when('/twitts', {
        templateUrl: 'twitts.html',
        controller: 'twittsCtrl'
      })
      .when('/pie', {
        templateUrl: 'pie.html',
        controller: 'pieCtrl'
      })
    .otherwise({redirectTo: '/'});
});
