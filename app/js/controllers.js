'use strict';

/* Controllers */

var movieControllers = angular.module('movieControllers', []);

var apikey = "7e4h9yk7rx32gysjmsau5dk7";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/";


movieControllers.controller('MovieListCtrl', ['$scope', '$http',
  function MovieListCtrl($scope, $http) {
    var query = "star+wars"
    var url = baseUrl + "movies.json?apikey=" + apikey + "&q=" + query + "&callback=JSON_CALLBACK"
    $http.jsonp(url)
      .success(function(data) {
        $scope.movies = data.movies;
      }
    );
  }
]);
