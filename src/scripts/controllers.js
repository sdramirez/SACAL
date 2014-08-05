var sacalControllers = angular.module('sacalControllers', []);

sacalControllers.controller("MainCtrl", function ($rootScope,$scope,$state,$location,$modal,validaSesion,mostrarNotificacion) {
  validaSesion.login(function sucess(){
    callToWebService.postCall("getInfoToken.php",
    function sucess(data){
      $scope.json = data;
      debugger;
    },
    function error(data){
      mostrarNotificacion.error("Usuario o contrasena incorrectos");
    });
  });

  $scope.isLogin = function(path){
    return $state.is(path);
  };
  $scope.singOut = function(){
    $location.path("/Login");
  };
  $scope.newPass = function(){

    $location.path("/Login");
  };

  $scope.changePassword = function () {
      var modalInstance = $modal.open({
          templateUrl: 'views/Modal/changePassword.html',
          controller: changePasswordCtrl,
          windowClass: 'modal-cancelar',
          backdrop: 'static'
      });
    };

    var changePasswordCtrl = function($scope, $modalInstance){
      $scope.close = function () {
        $modalInstance.dismiss();
      };
      $scope.newPassword = function () {
        
      };
    };

});
sacalControllers.controller("LoginCtrl", function ($rootScope,$scope,$location,mostrarNotificacion,callToWebService) {
  $scope.lost = false;
  $scope.sendEmail = false;
  $scope.login = function(f){
    var url = "login.php?usu_name='"+f.username.$viewValue+"'&usu_pass='"+f.password.$viewValue+"'";
    debugger;
    callToWebService.postCall(url,
    function sucess(data){
      $scope.json = data;
      debugger;
    },
    function error(data){
     mostrarNotificacion.error("Usuario o contrasena incorrectos");
    });
  };

});
sacalControllers.controller("AlumnoCtrl", function ($rootScope,$scope,validaSesion){
  validaSesion.login(function sucess(){
    debugger;
  });
});
sacalControllers.controller("DocenteCtrl", function ($rootScope,$scope,$state,$location,validaSesion) {
  validaSesion.login(function sucess(){
    debugger;
  });

  $location.path("/Docente/Reservar");
  $scope.menuActivo = function(path){
    return $state.is(path);
  };
  $scope.Link = function(url){
    $location.path(url);
  };
});
sacalControllers.controller("ReservarDocenteCtrl", function ($rootScope,$scope,$modal) {
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
  {Horas:2,Dias:[{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
  {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
  {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''}]},
  {Horas:2,Dias:[{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
  {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
  {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''}]},
  {Horas:2,Dias:[{esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'},
  {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},
  {esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''},{esReservado:false,esReservadoOwner:false,Nombre:'',Materia:'',Grupo:''}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:true,esReservadoOwner:false,Nombre:'Juan Perez',Materia:'Ofimatica',Grupo:'3-A'},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'}]},
  {Horas:2,Dias:[{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]},
  {Horas:2,Dias:[{esReservado:true,esReservadoOwner:true,Nombre:'Daniel Torres',Materia:'Desarrollo Web',Grupo:'5-A'},
  {esReservado:false},{esReservado:false},{esReservado:false},{esReservado:false}]}];
  //19 registros debe traer la consulta para que funcione :p

  $scope.infoPopOver = function (p,i) {
      var modalInstance = $modal.open({
          templateUrl: 'views/Docente/Modal/info.html',
          controller: infoCtrl,
          windowClass: 'modal-info',
          backdrop: 'static',
          resolve: {
              datos: function () {
                  return $scope.dataHoras[p].Dias[i];
              }
          }
      });
    };

    $scope.confirmar = function (p,i) {
      var modalInstance = $modal.open({
          templateUrl: 'views/Docente/Modal/confirmar.html',
          controller: confirmarCtrl,
          windowClass: 'modal-confirmar',
          backdrop: 'static',
          resolve: {
              datos: function () {
                  return $scope.dataHoras[p].Dias[i];
              }
          }
      });
    };

    $scope.cancelar = function (p,i) {
      var modalInstance = $modal.open({
          templateUrl: 'views/Docente/Modal/cancelar.html',
          controller: cancelarCtrl,
          windowClass: 'modal-cancelar',
          backdrop: 'static',
          resolve: {
              datos: function () {
                  return $scope.dataHoras[p].Dias[i];
              }
          }
      });
    };

    var cancelarCtrl = function($scope, $modalInstance, datos){
      $scope.close = function () {
        $modalInstance.dismiss();
      };
      $scope.cancelar = function () {
        datos.esReservado = false;
        datos.esReservadoOwner = false;
        $modalInstance.dismiss();
      };
    };

    var confirmarCtrl = function($scope, $modalInstance, datos){
      $scope.close = function () {
        $modalInstance.dismiss();
      };
      $scope.reservar = function () {
        datos.esReservado = true;
        datos.esReservadoOwner = true;
        $modalInstance.dismiss();
      };
    };

    var infoCtrl = function ($scope, $modalInstance, datos) {
        $scope.infor = datos;
        $scope.close = function () {
            $modalInstance.dismiss();
        };
    };

});
sacalControllers.controller("ControlDocenteCtrl", function ($rootScope,$scope) {
  $scope.puerta = true;
  $scope.controlPuerta = function(bool){
    $scope.puerta = bool;
  };
  $scope.proyector = true;
  $scope.controlProyect = function(bool){
    $scope.proyector = bool;
  };
  $scope.compu = true;
  $scope.controlCompu = function(bool){
    $scope.compu = bool;
  };
  $scope.luz = true;
  $scope.controlLuz = function(bool){
    $scope.luz = bool;
  };
  $scope.aire = true;
  $scope.controlAire = function(bool){
    $scope.aire = bool;
  };
});
sacalControllers.controller("ReporteDocenteCtrl", function ($rootScope,$scope){
  
});
sacalControllers.controller("AdminCtrl", function ($rootScope,$scope,$location,$state,validaSesion){
  validaSesion.login(function sucess(){
    debugger;
  });

  $location.path("/Admin/Alumno");
  $scope.menuActivo = function(path){
    return $state.is(path);
  };
  $scope.Link = function(url){
    $location.path(url);
  };
});
sacalControllers.controller("AlumnoAdminCtrl", function ($rootScope,$scope,$timeout){
  $scope.alumnos = [{matricula:'0311101129',nombre:'Juan Perez',password:'123456',grupo:'1-A',confirmPassword:'123456'},
  {matricula:'0311101145',nombre:'Jose Lopez',password:'jperez',grupo:'1-A',confirmPassword:'jperez'}];
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addAlumno = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){  
      if($scope.editar){
        $scope.deleteAlumno();
      }
      $scope.alumnos.push({
        matricula: form.matricula.$viewValue,
        nombre: form.name.$viewValue,
        password: form.password.$viewValue,
        grupo: form.grupo.$viewValue,
        confirmPassword: form.confirmPassword.$viewValue
      });
      
      $scope.matricula = '';
      $scope.name = '';
      $scope.password = '';
      $scope.grupo = '';
      $scope.confirmPassword = '';
    }
    else{
      /*$scope.$parent.$parent.alerts = [];
      $scope.$parent.$parent.alerts.push({
        msg: 'Las contrase\u00f1as deben ser iguales',
        type: 'error'
      });
      $timeout(function(){
        $scope.$parent.$parent.alerts = [];
      }, 5000);*/
    }
  };

  $scope.deleteAlumno = function(){
      $scope.alumnos.splice($scope.rowSelec,1);
      $scope.rowSelec = -1;
      $scope.opciones = false;
  };

  $scope.editAlumno = function(){
    var alumno = $scope.alumnos[$scope.rowSelec];
    $scope.matricula = alumno.matricula;
    $scope.name = alumno.nombre;
    $scope.password = alumno.password;
    $scope.grupo = alumno.grupo;
    $scope.confirmPassword = alumno.confirmPassword;
    $scope.editar = true;
  };

});
sacalControllers.controller("MaestroAdminCtrl", function($rootScope,$scope,$timeout){

  $scope.empleados = [{noEmpleado:'AD41',nombre:'Jose Perez',password:'564',typeUser:'Docente',confirmPassword:'564', materia:'Web'},
  {noEmpleado:'CV85',nombre:'Predro Mendez',password:'pm',typeUser:'Admin',confirmPassword:'pm', materia:''}];
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

});
sacalControllers.controller("MateriaAdminCtrl", function($rootScope,$scope){
  $scope.materia = [{nombre:'Web',maestro:'Luis Lopez'},{nombre:'Android',maestro:'Daniel Jose'}];
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };
});
sacalControllers.controller("GrupoAdminCtrl", function($rootScope,$scope){
  $scope.grupo = [{nombre:'1-A',inicio:'2014-01-06',fin:'2014-04-25'},
  {nombre:'3-A',inicio:'2014-01-06',fin:'2014-04-25'}];
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

});
sacalControllers.controller("LaboratorioAdminCtrl", function($rootScope,$scope){
  $scope.labs = [{nombre:'Multimedia',noCompu:20},
  {nombre:'Desarrollo I',noCompu:22}];
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };
});
sacalControllers.controller("ReservarAdminCtrl", function($rootScope,$scope){
  
});
sacalControllers.controller("HoraAdminCtrl", function($rootScope,$scope){
  $scope.hora=[{inicio:'7:00', fin:'7:50'},{inicio:'7:50',fin:'8:40'},
  {inicio:'8:40',fin:'9:30'},{inicio:'9:30',fin:'10:20'}];
  $scope.dia=[{Dia:"Lunes"},{Dia:"Martes"},{Dia:"Miercoles"},{Dia:"Jueves"},
  {Dia:"Viernes"}];
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };
   $scope.select2 = function(i){
    $scope.rowSelec2 = i;
    $scope.opciones2 = true;
  };

});
sacalControllers.controller("ControlAdminCtrl", function($rootScope,$scope){
  
});
sacalControllers.controller("ClaseAdminCtrl", function($rootScope,$scope){
  
});