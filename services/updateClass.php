<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$grupo = $_GET['grupo'];
	$materia = $_GET['materia'];
	$dia = $_GET['dia'];
	$hora = $_GET['hora'];
	$maestro = $_GET['maestro'];
	$clase = $_GET['clase'];

	$consulta = "SELECT mae_mat_id FROM maestro_materia WHERE mae_mat_id_materia = $materia AND mae_mat_id_maestro = $maestro";
	$r = leerRegistro($consulta);
	if($r != "" || $r != null){
		$id = $r['mae_mat_id'];
		updateClass($grupo,$id,$hora,$dia,$clase);	
	}
	else
	{
		$con2 = "INSERT INTO maestro_materia (mae_mat_id_materia,mae_mat_id_maestro) VALUES ($materia, $maestro)";
		$id = ejecutarConsultaId($con2);
		updateClass($grupo,$id,$hora,$dia,$clase);
	}

	function updateClass($grupo,$id,$hora,$dia,$clase){
		$sql = "UPDATE clase SET cla_grupo_id=$grupo,cla_maestro_materia_id=$id,cla_hora_id=$hora,cla_dia_id=$dia WHERE cla_id=$clase";
		ejecutarConsulta($sql);
	}
?>