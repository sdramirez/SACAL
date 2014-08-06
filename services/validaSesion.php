<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	if (isset($_COOKIE['sacalWeb'])){
		$token = $_COOKIE['sacalWeb'];
		$query = "SELECT * FROM usuario WHERE usu_token = '$token';";
		$result = leerRegistro($query);
		if(isset($result)){
			print_r(json_encode($result));
		}
		else{
			print_r("error");
		}
	}
	else{
	    echo "error";
	}
?>