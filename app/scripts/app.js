'use strict';

/**
 * @ngdoc overview
 * @name geckoApp
 * @description
 * # geckoApp
 *
 * Main module of the application.
 */
angular
  .module('geckoApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/users', {
        templateUrl: 'views/userView.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/sitters', {
        templateUrl: 'views/sitterView.html',
        controller: 'sitterView',
        controllerAs: 'sitter'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
