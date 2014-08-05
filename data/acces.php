
<?php

/*LOGIN*/

$usuario = $_POST['usuario'];
$passw = $_POST['password'];


	require_once 'funciones_bd.php';
	$db = new funciones_BD();

	if($db->login($usuario,$passw))
	{	
		$resultado[]=array("logstatus"=>"1");
	}
	else
	{
		$resultado[]=array("logstatus"=>"$passw");
	}

	echo json_encode($resultado);
?>
