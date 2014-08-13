<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$grupo = $_GET['grupo'];
	$materia = $_GET['materia'];
	$dia = $_GET['dia'];
	$hora = $_GET['hora'];
	$maestro = $_GET['maestro'];
	$consulta = "SELECT mae_mat_id FROM maestro_materia WHERE mae_mat_id_materia = $materia AND mae_mat_id_maestro = $maestro";
	$r = leerRegistro($consulta);
	if($r != "" || $r != null){
		$id = $r['mae_mat_id'];
		$consulta = "SELECT cla_id FROM clase WHERE cla_grupo_id = $grupo AND cla_maestro_materia_id = $id AND cla_hora_id = $hora AND cla_dia_id = $dia";
		$r = leerRegistro($consulta);
		if($r != "" || $r != null){
			print_r("error");
		}
		else{
			insertClass($grupo,$id,$hora,$dia);	
		}
	}
	else{
		$con2 = "INSERT INTO maestro_materia (mae_mat_id_materia,mae_mat_id_maestro) VALUES ($materia, $maestro)";
		$id = ejecutarConsultaId($con2);
		insertClass($grupo,$id,$hora,$dia);
	}

	function insertClass($grupo,$id,$hora,$dia){
		$sql = "INSERT INTO clase (cla_grupo_id,cla_maestro_materia_id,cla_hora_id,cla_dia_id) 
			VALUES ($grupo,$id,$hora,$dia)";
		ejecutarConsulta($sql);
	}
?>