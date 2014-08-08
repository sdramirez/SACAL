<?php 
	error_reporting(0);
	require_once('../data/conexion.php');
	$nombre = $_GET['nombre'];
	$matri = $_GET['matri'];
	$contra = $_GET['contra'];
	$correo = $_GET['correo'];
	$typeUser = $_GET['user'];
	$grupo = $_GET['grupo'];
	$token = substr(md5(md5($correo.$contra)), -20);
	$sql = "INSERT INTO usuario (usu_nombre, usu_usuario_num, usu_contrasena, usu_correo, usu_tipo_usuario_id, usu_token) VALUES ('$nombre', $matri, '$contra', '$correo', $typeUser, '$token')";
	$ejecute = ejecutarConsulta($sql);
	if($ejecute != "error"){
		$consulta = "SELECT usu_id FROM usuario WHERE usu_token = '$token'";
		$r = leerRegistro($consulta);
		if(isset($r)){
			$idUser = $r["usu_id"];
			switch ($typeUser) {
				case 1:
					break;
				case 2:
					$con = "INSERT INTO maestro(mae_usuario_id) VALUES ($idUser)";
					$idResult = ejecutarConsultaId($con);
					$con2 = "INSERT INTO maestro_materia (mae_mat_id_materia,mae_mat_id_maestro) VALUES ($grupo, $idResult)";
					ejecutarConsulta($con2);
					break;
				case 3:
					$con = "INSERT INTO alumno(alu_id_grupo,alu_usuario_id) VALUES ($grupo,$idUser)";
					ejecutarConsulta($con);
					break;
			}
		}
		else{
			print_r("error");
		}
	}
?>