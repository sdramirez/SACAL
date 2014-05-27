var sacalControllers = angular.module('sacalControllers', []);

sacalControllers.controller("MainCtrl", function ($rootScope,$scope,$state,$location) {
  $scope.isLogin = function(path){
    return $state.is(path);
  };
  $scope.singOut = function(){
    $location.path("/Login");
  };
});
sacalControllers.controller("LoginCtrl", function ($rootScope,$scope,$location) {
  $scope.lost = false;
  $scope.sendEmail = false;
  $scope.login = function(){
    $location.path("/Docente/Reservar");
  }; 
});
sacalControllers.controller("DocenteCtrl", function ($rootScope,$scope,$state,$location) {
  $location.path("/Docente/Reservar");
  $scope.menuActivo = function(path){
    return $state.is(path);
  };
  $scope.Link = function(url){
    $location.path(url);
  };
});
sacalControllers.controller("ReservarDocenteCtrl", function ($rootScope,$scope) {
  $scope.labDisponibles = [{Nombre:'Todos'},{Nombre:'Laboratorio I'},{Nombre:'Lab II'},
  {Nombre:'Diseño'},{Nombre:'Desarrollo'}];
  $scope.opcSelect = 'Laboratorio I';
  $scope.dias=[{Dia:"Lunes"},{Dia:"Martes"},{Dia:"Miercoles"},{Dia:"Jueves"},
  {Dia:"Viernes"}];
  $scope.horas=[{Hor:'7:00  7:50'},{Hor:'7:50  8:40'},{Hor:'8:40  9:30'},
  {Hor:'9:30  10:20'},{Hor:'10:20  11:10'},{Hor:'11:10  12:00'},
  {Hor:'12:00  12:50'},{Hor:'12:50  13:40'},{Hor:'13:40  14:30'},
  {Hor:'14:30  15:20'},{Hor:'15:20  16:10'},{Hor:'16:10  17:00'},
  {Hor:'17:00  17:50'},{Hor:'17:50  18:40'},{Hor:'18:40  19:30'},
  {Hor:'19:30  20:20'},{Hor:'20:20  21:10'},{Hor:'21:10  22:00'},
  {Hor:'22:00 22:50'}];
  $scope.dataHoras = [{Horas:2,
    Dias:[{esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'}]},
  {Horas:2,Dias:[{esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'}]},
  {Horas:2,Dias:[{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
    {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]}];
  //$scope.datos = [{esReservado:true,esReservadoOwner:true}];
});
sacalControllers.controller("ControlDocenteCtrl", function ($rootScope,$scope) {
});