<?php
	error_reporting(0);
	require_once('../data/conexion.php');
	$query = "SELECT cla_id,gru_id,mae_mat_id,mat_id,mae_id,usu_id,hor_id,dia_id,gru_nombre,gru_periodo_inicio, gru_periodo_fin,hor_inicio,hor_fin, dia_nombre,mat_nombre,usu_nombre FROM clase INNER JOIN grupo on cla_grupo_id = gru_id INNER JOIN hora on cla_hora_id = hor_id INNER JOIN dia on cla_dia_id = dia_id INNER JOIN maestro_materia ON cla_maestro_materia_id = mae_mat_id INNER JOIN materia ON mae_mat_id_materia = mat_id INNER JOIN maestro on mae_mat_id_maestro = mae_id INNER JOIN usuario ON mae_usuario_id = usu_id ORDER BY dia_nombre,hor_inicio";
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
	$query = "SELECT * FROM materia ORDER BY mat_nombre";
	$result = leerTabla($query);
	$output3 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output3[] = $r;
	}
	$query = "SELECT usu_id,usu_nombre,mae_id FROM usuario INNER JOIN maestro on usu_id = mae_usuario_id ORDER BY usu_nombre";
	$result = leerTabla($query);
	$output4 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output4[] = $r;
	}
	$query = "SELECT * FROM dia";
	$result = leerTabla($query);
	$output5 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output5[] = $r;
	}
	$query = "SELECT * FROM hora";
	$result = leerTabla($query);
	$output6 = array();
	while ($r=mysql_fetch_assoc($result)){
		$output6[] = $r;
	}
	$output7["Clases"] = $output;
	$output7["Grupos"] = $output2;
	$output7["Materias"] = $output3;
	$output7["Maestros"] = $output4;
	$output7["Dias"] = $output5;
	$output7["Horas"] = $output6;
	print_r(json_encode($output7));
?>