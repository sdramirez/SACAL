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
  .state("alumno", {
    url: "/Alumno",
    templateUrl: 'views/Alumno.html',
    controller: 'AlumnoCtrl'
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
  })
  .state('docente.reporte', {
      url: '/Reportes',
      views:
      {
          '@':{
              templateUrl: 'views/Docente/Reportes.html',
              controller: 'ReporteDocenteCtrl'
          }
      }
  })
  .state('admin',{
      url: '/Admin',
      controller: 'AdminCtrl',
      views:
      {
          'menuApp':{
              templateUrl: 'views/Admin/AdminMenu.html',
              controller: 'AdminCtrl'
          },
          '':{
              templateUrl: 'views/Admin/AdminMain.html',
              controller: 'AdminCtrl'
          }
      }
  })
  .state('admin.alumno', {
      url: '/Alumno',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Alumno.html',
              controller: 'AlumnoAdminCtrl'
          }
      }
  })
  .state('admin.maestro', {
      url: '/Maestro',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Maestro.html',
              controller: 'MaestroAdminCtrl'
          }
      }
  })
  .state('admin.materia', {
      url: '/Materia',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Materia.html',
              controller: 'MateriaAdminCtrl'
          }
      }
  })
  .state('admin.grupo', {
      url: '/Grupo',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Grupo.html',
              controller: 'GrupoAdminCtrl'
          }
      }
  })
  .state('admin.laboratorio', {
      url: '/Laboratorio',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Laboratorio.html',
              controller: 'LaboratorioAdminCtrl'
          }
      }
  })
  .state('admin.reservar', {
      url: '/Reservar',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Reservar.html',
              controller: 'ReservarAdminCtrl'
          }
      }
  })
  .state('admin.hora', {
      url: '/Hora',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Hora.html',
              controller: 'HoraAdminCtrl'
          }
      }
  })
  .state('admin.control', {
      url: '/Control',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Control.html',
              controller: 'ControlAdminCtrl'
          }
      }
  })
  .state('admin.clase', {
      url: '/Clase',
      views:
      {
          '@':{
              templateUrl: 'views/Admin/Clase.html',
              controller: 'ClaseAdminCtrl'
          }
      }
  });
}).controller('alertCtrl', function ($scope, mostrarNotificacion) {
  $scope.notificaciones = mostrarNotificacion;
  $scope.closeAlert = function (){
    $scope.notificaciones.clear();
  };
})
.service('mostrarNotificacion', ['$timeout', function ($timeout) {
  var serv = {};

  serv.alerts = [];

  serv.error = function(msg){
    serv.alerts = [];
    serv.alerts.push({type:'error', msg:msg});
    $timeout(function(){
      serv.clear();
    }, 10000);
  };

  serv.info = function(msg){
    serv.alerts = [];
    serv.alerts.push({type:'info', msg:msg});
    $timeout(function(){
      serv.clear();
    }, 10000);
  };

  serv.clear = function(msg){
    serv.alerts = [];
  };

  return serv;
  }
]).service('callToWebService', [
  '$http',
  function ($http) {
    this.postCall = function (endpoint, succesCB, errorCB) {
        $http({
            method:'GET',
            url:'services/'+endpoint
        })
        .success(function (data){
          if (data == "error") {
            errorCB(data);
          }
          else{
            succesCB(data);
          }
        })
        .error(function (data){
        });
    };

}]).service('validaSesion', [
  '$http','$location',
    function ($http,$location){
        this.login = function (succesCB) {
          $http({
            method:'GET',
            url:'services/validaSesion.php'
          })
          .success(function (data){
            if(data != "error"){
              succesCB(data);
            }
            else{              
              $location.path("/Login");
            }
          })
          .error(function (data){
            $location.path("/Login");
          });
        };
      }
]);