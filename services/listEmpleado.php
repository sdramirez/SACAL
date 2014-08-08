<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$query = "SELECT usu_id,usu_nombre,usu_usuario_num,usu_contrasena,usu_correo,mae_id,mae_mat_id,mat_id,mat_nombre FROM usuario INNER JOIN maestro on usu_id = mae_usuario_id INNER JOIN maestro_materia on mae_id = mae_mat_id_maestro INNER JOIN materia ON mae_mat_id_materia = mat_id ORDER BY usu_nombre";
	$result = leerTabla($query);
	$output = array();
	while ($r=mysql_fetch_assoc($result)){
		$output[] = $r;
	}
	$query = "SELECT * FROM materia";
	$result = leerTabla($query);
	$output2 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output2[] = $r;
	}
	$output3["Maestros"] = $output;
	$output3["Materias"] = $output2;
	print_r(json_encode($output3));
?>