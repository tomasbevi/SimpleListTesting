<?php
include("../includes/conexion.php");
/*********************/
/*TRAIGO LOS LISTADOS*/
/*********************/
if($_GET['accion'] == "listar"){
	
	$sql = "SELECT * FROM  lista ORDER BY orden ASC";
		if($result=mysql_query($sql)){
			
			while ($fila = mysql_fetch_assoc($result)){
				$ret['status'] = 'ok';
				$ret['items'][] = array($fila['id'], $fila['nombre'] , $fila['descripcion'] , $fila['orden'] , $fila['img']);
			}
			$ret['total']=mysql_num_rows($result);
			echo json_encode($ret);
			die();	
		}
}
/*********************/
/*TRAIGO DE A UNO*/
/*********************/
if($_GET['accion'] == "lista"){
	
	$sql = "SELECT * FROM  lista WHERE id =" . mysql_real_escape_string($_GET['id']);
		if($result=mysql_query($sql)){
			while ($fila = mysql_fetch_assoc($result)){
				$ret['status'] = 'ok';
				$ret['item'][] = array($fila['id'], $fila['nombre'] , $fila['descripcion'] , $fila['orden'] , $fila['img']);
			}
			echo json_encode($ret);
			die();	
		}
}
/*********************/
/*HAGO EL UPDATE DE LOS ITEMS*/
/*********************/
if($_GET['accion'] == "update"){
	$sql = "UPDATE `lista` SET `nombre`='".mysql_real_escape_string($_POST['nombre'])."', `descripcion`='".mysql_real_escape_string($_POST['description'])."' , `img`='".mysql_real_escape_string($_POST['img'])."' WHERE (`id`='".mysql_real_escape_string($_POST['id'])."')";
	if($result=mysql_query($sql)){
		$ret['status'] = 'ok';
	}else{
		$ret['status'] = 'error';
	}
	echo json_encode($ret);
	die();	
}
/*********************/
/*DELETE DE LA DB*/
/*********************/
if($_GET['accion'] == "delete"){
	$sql = "DELETE FROM `lista` WHERE (`id`='".mysql_real_escape_string($_POST['id'])."')";
	if($result=mysql_query($sql)){
		$ret['status'] = 'ok';
	}else{
		$ret['status'] = 'error';
	}
	echo json_encode($ret);
	die();
}

/*********************/
/*HAGO EL UPDATE DE EL ORDEN*/
/*********************/
if($_GET['accion'] == "orden"){
	$arrayorden = explode("," , $_POST['ordenes']);
	$counter=1;
	foreach ($arrayorden as $valor) {
		mysql_query("UPDATE `lista` SET `orden`='".$counter."' WHERE (`id`='".$valor."')");
		$counter++;
	}
	$ret['status'] = 'ok';
	echo json_encode($ret);
	die();
}

/*********************/
/*HAGO CARGA DE NUEVO ITEMS*/
/*********************/
if($_GET['accion'] == "new"){
	$sql = "INSERT INTO `lista` ( `nombre`, `descripcion`, `img`) VALUES ( '".mysql_real_escape_string($_POST['nombre'])."', '".mysql_real_escape_string($_POST['description'])."' , '".$_POST['img']."')";
	if($result=mysql_query($sql)){
		$ret['status'] = 'ok';
	}else{
		$ret['status'] = 'error';
	}
	echo json_encode($ret);
	die();	
}
?>