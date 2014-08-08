<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$query = "SELECT * FROM grupo ORDER BY gru_nombre";
	$result = leerTabla($query);
	$output = array();
	while ($r=mysql_fetch_assoc($result)){
		$output[] = $r;
	}
	print_r(json_encode($output));
?>