<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$query = "SELECT usu_id,usu_nombre,usu_usuario_num,usu_correo,usu_contrasena FROM usuario WHERE usu_tipo_usuario_id = 1 ORDER BY usu_nombre";
	$result = leerTabla($query);
	$output = array();
	while ($r=mysql_fetch_assoc($result)){
		$output[] = $r;
	}
	print_r(json_encode($output));
?>