var sacalApp = angular.module("sacalApp",[
  'ui.router',
  'ui.bootstrap'
]);

sacalApp.config(function($stateProvider) {

  $stateProvider

  .state("home", {
    url: "/Home/:userType",
    templateUrl: 'views/Home.html',
    controller: 'HomeCtrl'
  })
  .state("login", {
  	url: "/Login",
  	templateUrl: 'views/Login.html',
  	controller: 'LoginCtrl'
  })

});

sacalApp.controller("MainCtrl", function ($rootScope,$scope,$location,$stateParams,$state) {
  $location.path("/Login");
  
  $scope.isState = function(path){
    return $state.is(path);
  }

});

sacalApp.controller("LoginCtrl", function ($rootScope,$scope,$location,$stateParams) {

  $scope.login = function(){
    $location.path("/Home/Docente");
  };

});

sacalApp.controller("HomeCtrl", function ($rootScope,$scope,$location,$stateParams,callToWebService) {
  var userType = $stateParams.userType;
  // $scope.llamado = true;
  //  $scope.$watch("llamado", function () {
  //   callToWebService.postCall('/Reservar', {},
  //     function sucess(data){
  //       debugger;
  //       alert(1);
  //     },
  //     function error(data){
  //       alert(0);
  //     });
  // }, true);
  
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
}])