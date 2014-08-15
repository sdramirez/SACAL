<?php
	error_reporting(0); 
	require_once('../data/conexion.php');
	$aluId = $_GET['alumno'];
	$usuId = $_GET['usuario'];
	$maeMate = $_GET['idmaemat'];
	$typeUser = $_GET['type'];
	$clase = $_GET['clase'];
	$ejecute = "";
	switch ($typeUser) {
		case 1:
			break;
		case 2:
			/*$sql = "DELETE FROM clase WHERE cla_id = $clase";
			$ejecute = ejecutarConsulta($sql);*/
			$sql = "DELETE FROM maestro_materia WHERE mae_mat_id = $maeMate";
			$ejecute = ejecutarConsulta($sql);
			$sql = "DELETE FROM maestro WHERE mae_id = $aluId";
			$ejecute = ejecutarConsulta($sql);
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