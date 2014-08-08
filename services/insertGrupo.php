<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$ini = $_GET['ini'];
	$fin = $_GET['fin'];
	$sql = "INSERT INTO grupo (gru_nombre,gru_periodo_inicio,gru_periodo_fin) VALUES ('$nombre','$ini','$fin')";
	ejecutarConsulta($sql);
?>