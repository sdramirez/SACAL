<?php  
	function conectar()
	{
		//abrir conexi�n al servidor de MySQL
		mysql_connect('localhost', 'root', 'root1234') or die('Error al conectar al servidor de MySQL');
		//seleccionar base de datos
		mysql_select_db('sacal') or die('Base de datos no encontrada');
	}
	
	//ejecutar un query y regresar tabla de resultado
	function leerTabla($consulta)
	{
		conectar(); //conectar al servidor/BD
		$tabla = mysql_query($consulta); //ejecutar consulta
		return $tabla; //regresar resultado
	}
	
	//ejecutar un query y regresar primer registro
	function leerRegistro($consulta)
	{
		$tabla = leerTabla($consulta); //ejecutar consulta
		if (mysql_num_rows($tabla)>0) //ver si tiene registros
			$registro = mysql_fetch_assoc($tabla); //leer primer (y �nico) registro
		else
			$registro = null; //no se encontr�
		return $registro; //regresar resultado
	}
	
	function ejecutarConsulta($consulta)
	{
		conectar();
		mysql_query($consulta) or die ("Error");
	}
?>