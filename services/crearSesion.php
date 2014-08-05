<?php
	error_reporting(0);
	$usu_name = $_GET['usu_name'];
	$usu_pass = $_GET['usu_pass'];
	$datos = substr(md5($usu_name.$usu_pass), -10);   
	setcookie('sacalWeb', $datos, time() + 3600);
 ?>