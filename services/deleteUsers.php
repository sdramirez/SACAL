<?php 
	require_once('../data/conexion.php');
	$aluId = $_GET['alumno'];
	$usuId = $_GET['usuario'];
	$typeUser = $_GET['type'];
	$ejecute = "";
	switch ($typeUser) {
		case 1:
			break;
		case 2:
			break;
		case 3:
			$sql = "DELETE FROM alumno WHERE alu_id = $aluId";
			$ejecute = ejecutarConsulta($sql);
			break;
	}	
	if($ejecute != "error"){
		$sql = "DELETE FROM usuario WHERE usu_id = $usuId";
		$ejecute = ejecutarConsulta($sql);
	}
	else{
		print_r("error");
	}
?>