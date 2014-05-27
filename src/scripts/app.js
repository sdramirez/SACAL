var sacalApp = angular.module("sacalApp",[
  'ui.router',
  'ui.bootstrap',
  'sacalControllers'
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
sacalApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});