<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$usu_name = $_GET['usu_name'];
	$usu_pass = $_GET['usu_pass'];
	$query = "SELECT * FROM usuario WHERE usu_correo = $usu_name AND usu_contrasena = $usu_pass;";
	$result = leerRegistro($query);
	if(isset($result)){
		if (isset($_COOKIE['sacalWeb'])){
			unset($_COOKIE['sacalWeb']);
			setcookie('sacalWeb', null);
		}
		else{
			$datos = substr(md5(md5($usu_name.$usu_pass)), -20);   
			setcookie('sacalWeb', $datos, time() + 3600);
		}
		print_r(json_encode($result));
	}
	else{
		print_r("error");
	}
?>