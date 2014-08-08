<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$idMat = $_GET['id'];
	$sql = "DELETE FROM materia WHERE mat_id = $idMat";
	$ejecute = ejecutarConsulta($sql);
?>