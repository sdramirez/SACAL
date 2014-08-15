<?php

	Class DB_Connect{

		function __construct(){
		}

		function __destruct(){
			$this->close();
		}

		// try connecting
		public function connect()
		{
			require_once 'config.php';

				$conexion = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
				//mysql_select_db(DB_DATABASE);
				return $conexion;
		}

		public function close(){
			mysql_close();
		}

	}


?>