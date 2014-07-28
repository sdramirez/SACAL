<?php
	error_reporting(0);
	require_once('../data/conexion.php'); 
	
	$usu_name = $_GET['usu_name'];
	$usu_pass = $_GET['usu_pass'];

	$query = "SELECT * FROM usuario WHERE usu_usuario_num = $usu_name AND usu_contrasena = $usu_pass;";
	$result = leerRegistro($query);
	if(isset($result)){
		print_r(json_encode($result));
	}
	else{
		print_r(666);
	}
?>