var sacalControllers = angular.module('sacalControllers', []);

sacalControllers.controller("MainCtrl", function ($rootScope,$scope,$state,$location,$modal,validaSesion,mostrarNotificacion,callToWebService) {
  validaSesion.login(function sucess(data){
    $scope.Usuario = data;
    $scope.userName =  $scope.Usuario.usu_nombre;
    $scope.typeUser = $scope.Usuario.usu_tipo_usuario_id;
      switch($scope.typeUser){
        case "1":
        $location.path("/Admin/Alumno");
        break;
        case "2":
        $location.path("/Docente/Reservar");
        break;
        case "3":
        $location.path("/Alumno");
        break;
        case "4":
        $location.path("/Admin/Alumno");
        break;
      }
  });

  $scope.isLogin = function(path){
    return $state.is(path);
  };
  $scope.singOut = function(){
      callToWebService.postCall("cerrarSesion.php",
      function sucess(data){
        location.reload();
      },
      function error(data){
        location.reload();
      });
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
    callToWebService.postCall(url,
    function sucess(data){
      location.reload();
    },
    function error(data){
     mostrarNotificacion.error("Usuario o contrasena incorrectos");
    });
  };

});
sacalControllers.controller("AlumnoCtrl", function ($rootScope,$scope,validaSesion){
  validaSesion.login(function sucess(data){
    $scope.Usuario = data;
    $scope.typeUser = $scope.Usuario.usu_tipo_usuario_id;
    if($scope.typeUser != 3){
      location.reload();
    }
  });
});
sacalControllers.controller("DocenteCtrl", function ($rootScope,$scope,$state,$location,validaSesion) {
  validaSesion.login(function sucess(data){
    $scope.Usuario = data;
    $scope.typeUser = $scope.Usuario.usu_tipo_usuario_id;
    if($scope.typeUser != 2){
      location.reload();
    }
  });

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
  validaSesion.login(function sucess(data){
    $scope.Usuario = data;
    $scope.typeUser = $scope.Usuario.usu_tipo_usuario_id;
    if($scope.typeUser != 1 && $scope.typeUser != 4){
      location.reload();
    }
  });
  $scope.menuActivo = function(path){
    return $state.is(path);
  };
  $scope.Link = function(url){
    $location.path(url);
  };
});

sacalControllers.controller("AlumnoAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listAlumno.php",
      function sucess(data){
        $scope.alumnos = data.Alumnos;
        $scope.grupos = data.Grupos;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };
  $scope.addAlumno = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){
      var correo = form.correo.$viewValue;
      var pass = form.password.$viewValue;
      var nombre = form.name.$viewValue;
      var matri = form.matricula.$viewValue;
      var grupoId = form.grupo.$viewValue;
      var url = "insertUsers.php?nombre="+nombre+"&matri="+matri+"&contra="+pass+"&correo="+correo+"&user=3&grupo="+grupoId;
      callToWebService.postCall(url,
      function sucess(data){
        $scope.matricula = '';
        $scope.name = '';
        $scope.password = '';
        $scope.correo = '';
        $scope.grupo = '';
        $scope.confirmPassword = '';
        $scope.llamadoInicial++;
      },
      function error(data){
        mostrarNotificacion.error("Error al crear alumno");
      });
    }
    else{
      mostrarNotificacion.error("Las contrasenas no coinciden");
    }
  };

  $scope.editAlumnoSave = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){
      var correo = form.correo.$viewValue;
      var pass = form.password.$viewValue;
      var nombre = form.name.$viewValue;
      var matri = form.matricula.$viewValue;
      var grupoId = form.grupo.$viewValue;
      var alumno = $scope.alumnos[$scope.editSelect];
      var url = "updateUsers.php?nombre="+nombre+"&matri="+matri+"&contra="+pass+"&correo="+correo+"&user=3&grupo="+grupoId+"&alumno="+alumno.alu_id+"&usuario="+alumno.usu_id;
      callToWebService.postCall(url,
      function sucess(data){
        $scope.matricula = '';
        $scope.name = '';
        $scope.password = '';
        $scope.correo = '';
        $scope.grupo = '';
        $scope.confirmPassword = '';
        $scope.llamadoInicial++;
      },
      function error(data){
        mostrarNotificacion.error("Error al actualizar alumno");
      });
    }
    else{
      mostrarNotificacion.error("Las contrasenas no coinciden");
    }
  };

  $scope.deleteAlumno = function(){
      var alumno = $scope.alumnos[$scope.rowSelec];
      var url = "deleteUsers.php?alumno="+alumno.alu_id+"&usuario="+alumno.usu_id+"&type=3";
      callToWebService.postCall(url,
      function sucess(data){
        $scope.alumnos.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar alumno");
      });
  };

  $scope.editAlumno = function(){
    var alumno = $scope.alumnos[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.name = alumno.usu_nombre;
    $scope.matricula = alumno.usu_usuario_num;
    $scope.correo = alumno.usu_correo;
    $scope.password = alumno.usu_contrasena;
    $scope.confirmPassword = alumno.usu_contrasena;
    $scope.grupo = alumno.gru_id;
    $scope.editar = true;
  };
});

sacalControllers.controller("MaestroAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listEmpleado.php",
      function sucess(data){
        $scope.maestros = data.Maestros;
        $scope.materias = data.Materias;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);

  $scope.$watch("materia", function (params, paramsOld) {
    if(params != paramsOld){
      for(var i in $scope.materias){
        if(params == $scope.materias[i].mat_id)
          $scope.materiaNombre = $scope.materias[i].mat_nombre;
      }
    }
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addMaestro = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){
      var correo = form.correo.$viewValue;
      var pass = form.password.$viewValue;
      var nombre = form.name.$viewValue;
      var matri = form.matricula.$viewValue;
      var materiaId = form.materia.$viewValue;
      var url = "insertUsers.php?nombre="+nombre+"&matri="+matri+"&contra="+pass+"&correo="+correo+"&user=2&grupo="+materiaId;
      callToWebService.postCall(url,
      function sucess(data){
        $scope.matricula = '';
        $scope.name = '';
        $scope.password = '';
        $scope.correo = '';
        $scope.materia = '';
        $scope.confirmPassword = '';
        $scope.llamadoInicial++;
      },
      function error(data){
        mostrarNotificacion.error("Error al crear maestro");
      });
    }
    else{
      mostrarNotificacion.error("Las contrasenas no coinciden");
    }
  };

  $scope.editMaestroSave = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){
      var correo = form.correo.$viewValue;
      var pass = form.password.$viewValue;
      var nombre = form.name.$viewValue;
      var matri = form.matricula.$viewValue;
      var grupoId = form.materia.$viewValue;
      var alumno = $scope.maestros[$scope.editSelect];
      var url = "updateUsers.php?nombre="+nombre+"&matri="+matri+"&contra="+pass+"&correo="+correo+"&user=2&grupo="+grupoId+"&alumno="+alumno.mae_mat_id+"&usuario="+alumno.usu_id;
      callToWebService.postCall(url,
      function sucess(data){
        $scope.matricula = '';
        $scope.name = '';
        $scope.password = '';
        $scope.correo = '';
        $scope.materia = '';
        $scope.confirmPassword = '';
        $scope.llamadoInicial++;
      },
      function error(data){
        mostrarNotificacion.error("Error al actualizar maestro");
      });
    }
    else{
      mostrarNotificacion.error("Las contrasenas no coinciden");
    }
  };

  $scope.deleteMaestro = function(){
      var alumno = $scope.maestros[$scope.rowSelec];
      var url = "deleteUsers.php?idmaemat="+alumno.mae_mat_id+"&alumno="+alumno.mae_id+"&usuario="+alumno.usu_id+"&type=2&clase="+alumno.cla_id;
      callToWebService.postCall(url,
      function sucess(data){
        $scope.maestros.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar maestro");
      });
  };

  $scope.editMaestro = function(){
    var alumno = $scope.maestros[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.name = alumno.usu_nombre;
    $scope.matricula = alumno.usu_usuario_num;
    $scope.correo = alumno.usu_correo;
    $scope.password = alumno.usu_contrasena;
    $scope.confirmPassword = alumno.usu_contrasena;
    $scope.materia = alumno.mat_id;
    $scope.editar = true;
  };
});

sacalControllers.controller("MateriaAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listEmpleado.php",
      function sucess(data){
        $scope.materias = data.Materias;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addMaestro = function(form){
    var nombre = form.name.$viewValue;
    callToWebService.postCall("insertMateria.php?nombre="+nombre,
    function sucess(data){
      $scope.name = '';
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al crear materia");
    });
  };

  $scope.editMaestroSave = function(form){
    var nombre = form.name.$viewValue;
    var matId = $scope.materias[$scope.editSelect].mat_id;
    callToWebService.postCall("updateMateria.php?id="+matId+"&nombre="+nombre,
    function sucess(data){
      $scope.name = '';
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al actualizar materia");
    });
  };

  $scope.deleteMaestro = function(){
      var matId = $scope.materias[$scope.rowSelec].mat_id;
      callToWebService.postCall("deleteMateria.php?id="+matId,
      function sucess(data){
        $scope.materias.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar materia");
      });
  };

  $scope.editMaestro = function(){
    var alumno = $scope.materias[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.name = alumno.mat_nombre;
    $scope.editar = true;
  };
});

sacalControllers.controller("HoraAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listAdmins.php",
      function sucess(data){
        $scope.maestros = data;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addMaestro = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){
      var correo = form.correo.$viewValue;
      var pass = form.password.$viewValue;
      var nombre = form.name.$viewValue;
      var matri = form.matricula.$viewValue;
      var url = "insertUsers.php?nombre="+nombre+"&matri="+matri+"&contra="+pass+"&correo="+correo+"&user=1";
      callToWebService.postCall(url,
      function sucess(data){
        $scope.maestros.push({
          usu_nombre:nombre,
          usu_usuario_num:matri,
          usu_contrasena:pass,
          usu_correo:correo
        });
        $scope.matricula = '';
        $scope.name = '';
        $scope.password = '';
        $scope.correo = '';
        $scope.confirmPassword = '';
      },
      function error(data){
        mostrarNotificacion.error("Error al crear administrador");
      });
    }
    else{
      mostrarNotificacion.error("Las contrasenas no coinciden");
    }
  };

  $scope.editMaestroSave = function(form){
    if(form.password.$viewValue == form.confirmPassword.$viewValue){
      var correo = form.correo.$viewValue;
      var pass = form.password.$viewValue;
      var nombre = form.name.$viewValue;
      var matri = form.matricula.$viewValue;
      var alumno = $scope.maestros[$scope.editSelect];
      var url = "updateUsers.php?nombre="+nombre+"&matri="+matri+"&contra="+pass+"&correo="+correo+"&user=1&usuario="+alumno.usu_id;
      callToWebService.postCall(url,
      function sucess(data){
        var newAlumno = {
          usu_nombre:nombre,
          usu_usuario_num:matri,
          usu_contrasena:pass,
          usu_correo:correo
        };
        $scope.maestros[$scope.editSelect] = newAlumno;
        $scope.matricula = '';
        $scope.name = '';
        $scope.password = '';
        $scope.correo = '';
        $scope.confirmPassword = '';
      },
      function error(data){
        mostrarNotificacion.error("Error al actualizar administrador");
      });
    }
    else{
      mostrarNotificacion.error("Las contrasenas no coinciden");
    }
  };

  $scope.deleteMaestro = function(){
      var alumno = $scope.maestros[$scope.rowSelec];
      var url = "deleteUsers.php?usuario="+alumno.usu_id;
      callToWebService.postCall(url,
      function sucess(data){
        $scope.maestros.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar administrador");
      });
  };

  $scope.editMaestro = function(){
    var alumno = $scope.maestros[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.name = alumno.usu_nombre;
    $scope.matricula = alumno.usu_usuario_num;
    $scope.correo = alumno.usu_correo;
    $scope.password = alumno.usu_contrasena;
    $scope.confirmPassword = alumno.usu_contrasena;
    $scope.editar = true;
  };
});

sacalControllers.controller("LaboratorioAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listLab.php",
      function sucess(data){
        $scope.labs = data;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addMaestro = function(form){
    var nombre = form.name.$viewValue;
    var numero = form.numero.$viewValue;
    callToWebService.postCall("insertLab.php?nombre="+nombre+"&num="+numero,
    function sucess(data){
      $scope.name = '';
      $scope.numero = '';
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al crear laboratorio");
    });
  };

  $scope.editMaestroSave = function(form){
    var nombre = form.name.$viewValue;
    var numero = form.numero.$viewValue;
    var labId = $scope.labs[$scope.editSelect].lab_id;
    callToWebService.postCall("updateLab.php?id="+labId+"&nombre="+nombre+"&num="+numero,
    function sucess(data){
      $scope.name = '';
      $scope.numero = '';
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al actualizar laboratorio");
    });
  };

  $scope.deleteMaestro = function(){
      var labId = $scope.labs[$scope.rowSelec].lab_id;
      callToWebService.postCall("deleteLab.php?id="+labId,
      function sucess(data){
        $scope.labs.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar materia");
      });
  };

  $scope.editMaestro = function(){
    var alumno = $scope.labs[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.name = alumno.lab_nombre;
    $scope.numero = parseInt(alumno.lab_num);
    $scope.editar = true;
  };
});

sacalControllers.controller("GrupoAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listGrupos.php",
      function sucess(data){
        $scope.grupos = data;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addMaestro = function(form){
    var nombre = form.name.$viewValue;
    var inicio = document.getElementById("fechaIni").value;
    var fin = document.getElementById("fechaFin").value;
    callToWebService.postCall("insertGrupo.php?nombre="+nombre+"&ini="+inicio+"&fin="+fin,
    function sucess(data){
      $scope.name = '';
      document.getElementById("fechaIni").value = '';
      document.getElementById("fechaFin").value = '';
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al crear grupo");
    });
  };

  $scope.editMaestroSave = function(form){
    var nombre = form.name.$viewValue;
    var inicio = document.getElementById("fechaIni").value;
    var fin = document.getElementById("fechaFin").value;
    var id = $scope.grupos[$scope.editSelect].gru_id;
    callToWebService.postCall("updateGrupo.php?id="+id+"&nombre="+nombre+"&ini="+inicio+"&fin="+fin,
    function sucess(data){
      $scope.name = '';
      document.getElementById("fechaIni").value = '';
      document.getElementById("fechaFin").value = '';
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al actualizar grupo");
    });
  };

  $scope.deleteMaestro = function(){
      var id = $scope.grupos[$scope.rowSelec].gru_id;
      callToWebService.postCall("deleteGrupo.php?id="+id,
      function sucess(data){
        $scope.grupos.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar grupo");
      });
  };

  $scope.editMaestro = function(){
    var grupo = $scope.grupos[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.name = grupo.gru_nombre;
    $scope.fechaIni = grupo.gru_periodo_inicio;
    $scope.fechaFin = grupo.gru_periodo_fin;
    $scope.editar = true;
  };
});

sacalControllers.controller("ReservarAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  
});

sacalControllers.controller("ControlAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  
});

sacalControllers.controller("ClaseAdminCtrl", function ($rootScope,$scope,mostrarNotificacion,callToWebService){
  $scope.llamadoInicial = 1;
  $scope.$watch("llamadoInicial", function (params, paramsOld) {
    callToWebService.postCall("listClases.php",
      function sucess(data){
        $scope.clases = data.Clases;
        $scope.grupos = data.Grupos;
        $scope.materias = data.Materias;
        $scope.maestros = data.Maestros;
        $scope.dias = data.Dias;
        $scope.horas = data.Horas;
      },
      function error(data){
        mostrarNotificacion.error("Error al cargar datos");
      });
  }, true);
 
  $scope.select = function(i){
    $scope.rowSelec = i;
    $scope.opciones = true;
  };

  $scope.addMaestro = function(form){
    var grupo = form.grupo.$viewValue;
    var materia = form.materia.$viewValue;
    var maestro = form.maestro.$viewValue;
    var dia = form.dia.$viewValue;
    var hora = form.hora.$viewValue;
    var url = "insertClass.php?grupo="+grupo+"&materia="+materia+"&dia="+dia+"&hora="+hora+"&maestro="+maestro;
    callToWebService.postCall(url,
    function sucess(data){
      var grupo = "";
      var materia = "";
      var maestro = "";
      var dia = "";
      var hora = "";
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al crear clase");
    });
  };

  $scope.editMaestroSave = function(form){
    var grupo = form.grupo.$viewValue;
    var materia = form.materia.$viewValue;
    var maestro = form.maestro.$viewValue;
    var dia = form.dia.$viewValue;
    var hora = form.hora.$viewValue;
    var clase = $scope.clases[$scope.editSelect].cla_id;
    var url = "updateClass.php?grupo="+grupo+"&materia="+materia+"&dia="+dia+"&hora="+hora+"&maestro="+maestro+"&clase="+clase;
    callToWebService.postCall(url,
    function sucess(data){
      var grupo = "";
      var materia = "";
      var maestro = "";
      var dia = "";
      var hora = "";
      $scope.llamadoInicial++;
    },
    function error(data){
      mostrarNotificacion.error("Error al actualizar clase");
    });
  };

  $scope.deleteMaestro = function(){
      var clase = $scope.clases[$scope.rowSelec].cla_id;
      callToWebService.postCall("updateClass.php?id="+clase,
      function sucess(data){
        $scope.clases.splice($scope.rowSelec,1);
        $scope.rowSelec = -1;
        $scope.opciones = false;
      },
      function error(data){
        mostrarNotificacion.error("Error al elimniar clase");
      });
  };

  $scope.editMaestro = function(){
    var clase = $scope.clases[$scope.rowSelec];
    $scope.editSelect = $scope.rowSelec;
    $scope.grupo = clase.gru_id;
    $scope.materia = clase.mat_id;
    $scope.maestro = clase.usu_id;
    $scope.dia = clase.dia_id;
    $scope.hora = clase.hor_id;
    $scope.editar = true;
  };
});