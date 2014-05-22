var sacalApp = angular.module("sacalApp",[
  'ui.router',
  'ui.bootstrap'
]);

sacalApp.config(function($stateProvider) {

  $stateProvider

  // .state("home", {
  //   url: "views/main.html",
  //   controller: 'MainCtrl'
  // });

  .state("home", {
	url: "/Home",
	templateUrl: 'views/main.html',
	controller: 'MainCtrl'
  })

});

sacalApp.controller("MainCtrl", function ($rootScope,$scope) {

  $scope.hola = 'Si jalo';

});