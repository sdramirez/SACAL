<?php
	error_reporting(0); 
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$id = $_GET['id'];
	$sql = "UPDATE materia SET mat_nombre='$nombre' WHERE mat_id = $id";
	ejecutarConsulta($sql);
?>