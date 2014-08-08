<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$idMat = $_GET['id'];
	$sql = "DELETE FROM laboratorio WHERE lab_id = $idMat";
	$ejecute = ejecutarConsulta($sql);
?>