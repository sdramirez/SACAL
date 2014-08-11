<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$id = $_GET['id'];
	$sql = "DELETE FROM clase WHERE cla_id = $id";
	$ejecute = ejecutarConsulta($sql);
?>