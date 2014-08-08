<?php
	error_reporting(0); 
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$fin = $_GET['fin'];
	$ini = $_GET['ini'];
	$id = $_GET['id'];
	$sql = "UPDATE grupo SET gru_nombre='$nombre',gru_periodo_inicio='$ini',gru_periodo_fin='$fin' WHERE gru_id = $id";
	ejecutarConsulta($sql);
?>