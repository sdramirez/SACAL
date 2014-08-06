<?php 
	error_reporting(0);
	require_once('../data/conexion.php');
	$query = "SELECT alu_id,usu_nombre,usu_correo,usu_contrasena,gru_nombre FROM usuario INNER JOIN alumno ON usu_id = alu_usuario_id INNER JOIN grupo ON alu_id_grupo = gru_id WHERE usu_tipo_usuario_id = 3";
	$result = leerTabla($query);
	if(isset($result)){
		$output = array();
		while ($r=mysql_fetch_assoc($result)){
			$output[] = $r;
		}
		print_r(json_encode($output));
	}
	else{
		print_r("error");
	}
?>