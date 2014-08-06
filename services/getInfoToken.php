<?php 
	
	require_once('../data/conexion.php');
	$token = $_COOKIE['sacalWeb'];
	$query = "SELECT * FROM usuario WHERE usu_token = '$token';";
	$result = leerRegistro($query);
	if(isset($result)){
		print_r(json_encode($result));
	}
	else{
		print_r("error");
	}
?>