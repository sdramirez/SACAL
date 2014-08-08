<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$sql = "INSERT INTO materia (mat_nombre) VALUES ('$nombre')";
	ejecutarConsulta($sql);
?>