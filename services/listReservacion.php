<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$id = $_GET['id'];
	$usu = $_GET['usu'];
	$query = "SELECT * FROM reservacion INNER JOIN clase ON res_clase_id = cla_id WHERE res_clase_id = $id";
	$result = leerTabla($query);
	$output = array();
	while ($r=mysql_fetch_assoc($result)){
		$output[] = $r;
	}
	$query = "SELECT cla_id,gru_id,mae_mat_id,mat_id,mae_id,usu_id,hor_id,dia_id,gru_nombre,gru_periodo_inicio, gru_periodo_fin,hor_inicio,hor_fin, dia_nombre,mat_nombre,usu_nombre FROM clase INNER JOIN grupo on cla_grupo_id = gru_id INNER JOIN hora on cla_hora_id = hor_id INNER JOIN dia on cla_dia_id = dia_id INNER JOIN maestro_materia ON cla_maestro_materia_id = mae_mat_id INNER JOIN materia ON mae_mat_id_materia = mat_id INNER JOIN maestro on mae_mat_id_maestro = mae_id INNER JOIN usuario ON mae_usuario_id = usu_id WHERE usu_id = $usu";
	$result = leerTabla($query);
	$output2 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output2[] = $r;
	}
	$output3["Clases"] = $output2;
	$output3["Reservacion"] = $output;
	print_r(json_encode($output3));
?>