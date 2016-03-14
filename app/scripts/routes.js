'use strict';
/**
 * @ngdoc overview
 * @name tiymeetupApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('tiymeetupApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .when('/discussions', {
        templateUrl: 'views/discussions.html',
        controller: 'DiscussionsCtrl'
      })
      .when('/more', {
        templateUrl: 'views/more.html',
        controller: 'MoreCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
