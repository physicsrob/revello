/*global angular*/
angular.module('RevelloApp', [
  'ngRoute',
  'RevelloApp.controllers',
  'RevelloApp.services'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/list', {
    templateUrl: 'list.html',
    controller: 'listController'
  })
  .when('/game/:gameId', {
    templateUrl: 'game.html',
    controller: 'revelloController'
  })
  .otherwise({
      redirectTo: '/list'
  });
}]);
