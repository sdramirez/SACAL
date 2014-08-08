<?php 
	error_reporting(0);
	require_once('../data/conexion.php');
	$query = "SELECT alu_id,usu_id,usu_nombre,usu_usuario_num,usu_correo,usu_contrasena,gru_id,gru_nombre FROM usuario INNER JOIN alumno ON usu_id = alu_usuario_id INNER JOIN grupo ON alu_id_grupo = gru_id WHERE usu_tipo_usuario_id = 3 ORDER BY gru_nombre,usu_nombre";
	$result = leerTabla($query);
	$output = array();
	while ($r=mysql_fetch_assoc($result)){
		$output[] = $r;
	}
	$query = "SELECT gru_id,gru_nombre FROM grupo ORDER BY gru_nombre";
	$result = leerTabla($query);	
	$output2 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output2[] = $r;
	}
	$output3["Alumnos"] = $output;
	$output3["Grupos"] = $output2;
	print_r(json_encode($output3));
?>