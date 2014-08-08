<?php 
	error_reporting(0); 
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$matri = $_GET['matri'];
	$contra = $_GET['contra'];
	$correo = $_GET['correo'];
	$typeUser = $_GET['user'];
	$grupo = $_GET['grupo'];
	$aluId = $_GET['alumno'];
	$usuId = $_GET['usuario'];
	$token = substr(md5(md5($correo.$contra)), -20);
	$sql = "UPDATE usuario SET usu_nombre='$nombre',usu_usuario_num=$matri,usu_contrasena= '$contra',usu_correo='$correo',usu_tipo_usuario_id=$typeUser,usu_token='$token' WHERE usu_id = $usuId";
	ejecutarConsulta($sql);
	switch ($typeUser) {
		case 1:
			break;
		case 2:
			$sql2 = "UPDATE maestro_materia SET mae_mat_id_materia = $grupo WHERE mae_mat_id = $aluId";
			ejecutarConsulta($sql2);
			break;
		case 3:
			$sql2 = "UPDATE alumno SET alu_id_grupo = $grupo WHERE alu_id = $aluId";
			ejecutarConsulta($sql2);
			break;
	}
?>