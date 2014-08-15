<?php
class DB_FUNCTIONS{

	private $db;
	function __construct(){
		require_once('DB_Connect.php');

			$this->db = new DB_Connect();
			$this->db->connect();
	}


	function __destruct() { 

	}

	function leerRegistro($consulta)
	{
		$tabla = leerTabla($consulta);
		if (mysql_num_rows($tabla)>0)
			$registro = mysql_fetch_assoc($tabla);
		else
			$registro = null;
		return $registro;
	}

	public function login($usu, $pass){
		$query = "SELECT * FROM usuario WHERE usu_correo = $usu AND usu_contrasena = $pass;";

	}

	public function validateUser($user, $password){
		$queryResult= mysql_query("SELECT user_id, user_name FROM users 
			WHERE user_name = '$user'  and 
			user_password = '$password'");

		$row = mysql_num_rows($queryResult);
		if($row > 0)
		{
			return true;
		}
		else{ return false;}
		
    }

	public function changePassword($password, $newpassword){
		$queryResult= mysql_query("SELECT user_id, user_name FROM users 
			WHERE user_password = '$password'");

		$row = mysql_num_rows($queryResult);
		if($row > 0)
		{
			$result = mysql_query("UPDATE users SET user_password = '$newpassword'");

	        if ($result) {return true;} 
	        else {return false;}
		}
		else 
		{ return false;}
		
    }
}

?>