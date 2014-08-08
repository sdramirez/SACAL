<?php
	error_reporting(0); 
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$num = $_GET['num'];
	$id = $_GET['id'];
	$sql = "UPDATE laboratorio SET lab_nombre='$nombre',lab_num=$num WHERE lab_id = $id";
	ejecutarConsulta($sql);
?>