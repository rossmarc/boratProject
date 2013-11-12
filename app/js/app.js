'use strict';

/* App Module */

var app = angular.module('movieApp', [
  'ngRoute',
  'movieControllers',
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/movie-list.html',
        controller: 'MovieListCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);
