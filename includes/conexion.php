<?php

$ruta_base = "http://localhost/stensul/";
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db 	= "appstensul";

define('URL_BASE', $ruta_base);

$conectar = @mysql_connect($dbhost,$dbuser,$dbpass) or die("No se pudo conectar a la base de datos") ;
mysql_select_db($db,$conectar) or die("No se encuentra la base de datos ".$db) ;
mysql_query("SET NAMES UTF8");

?>
