<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$id = $_GET['id'];
	$sql = "DELETE FROM grupo WHERE gru_id = $id";
	$ejecute = ejecutarConsulta($sql);
?>