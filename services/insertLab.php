<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$num = $_GET['num'];
	$sql = "INSERT INTO laboratorio (lab_nombre,lab_num) VALUES ('$nombre',$num)";
	ejecutarConsulta($sql);
?>