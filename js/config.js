angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homeController'
      })
      .when('/movie', {
        templateUrl: '/templates/movie.html',
        controller: 'movieController'
      })
  })