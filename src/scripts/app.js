var sacalApp = angular.module("sacalApp",[
  'ui.router',
  'ui.bootstrap'
]);
sacalApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/Login');
  $stateProvider
  .state("login", {
    url: "/Login",
    templateUrl: 'views/Login.html',
    controller: 'LoginCtrl'
  })
  .state('docente',{
      url: '/Docente',
      controller: 'DocenteCtrl',
      views:
      {
          'menuApp':{
              templateUrl: 'views/Docente/DocenteMenu.html',
              controller: 'DocenteCtrl'
          },
          '':{
              templateUrl: 'views/Docente/DocenteMain.html',
              controller: 'DocenteCtrl'
          }
      }
  })
  .state('docente.reservar', {
      url: '/Reservar',
      views:
      {
          '@':{
              templateUrl: 'views/Docente/Reservar.html',
              controller: 'ReservarDocenteCtrl'
          }
      }
  })
  .state('docente.control', {
      url: '/Control',
      views:
      {
          '@':{
              templateUrl: 'views/Docente/Control.html',
              controller: 'ControlDocenteCtrl'
          }
      }
  });
});
sacalApp.controller("MainCtrl", function ($rootScope,$scope,$state,$location) {
  $scope.isLogin = function(path){
    return $state.is(path);
  };
  $scope.singOut = function(){
    $location.path("/Login");
  };
});
sacalApp.controller("LoginCtrl", function ($rootScope,$scope,$location) {
  $scope.login = function(){
    $location.path("/Docente/Reservar");
  };
});
sacalApp.controller("DocenteCtrl", function ($rootScope,$scope,$state,$location) {
  $location.path("/Docente/Reservar");
  $scope.menuActivo = function(path){
    return $state.is(path);
  };
  $scope.Link = function(url){
    $location.path(url);
  };
});
sacalApp.controller("ReservarDocenteCtrl", function ($rootScope,$scope) {
  $scope.labDisponibles = [{Nombre:'Todos'},{Nombre:'Lab I'},{Nombre:'Lab II'},
  {Nombre:'Diseño'},{Nombre:'Desarrollo'}];
  $scope.opcSelect = 'Todos';
});
sacalApp.controller("ControlDocenteCtrl", function ($rootScope,$scope) {
});
sacalApp.service('callToWebService', [
  '$http', '$state',
  function ($http, $state) {
    this.postCall = function (endpoint, postData, succesCB, errorCB) {
        $http({
            method:'POST',
            url: endpoint,
            data: JSON.stringify(postData),
            headers: {"Content-Type": "application/json; charset=utf-8"}
        })
        .success(function (data){

        })
        .error(function (data, responseCode){
          
        });
    };
}]);