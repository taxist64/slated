var app = angular.module('slated', ['ui.router']);

app.config(["$urlServiceProvider" , "$stateProvider", "$locationProvider", function ($urlServiceProvider, $stateProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  $urlServiceProvider.rules.otherwise({ state: 'home' });
  $stateProvider
    .state('home', {
      url: '/',
      component: 'movieSearch'
  });
}]).run(function () {

});