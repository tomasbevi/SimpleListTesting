/*****************************************************/
//LLAMO POR PRIMERA VEZ LA FUNCION PARA TRAER LOS ITEMS
/*****************************************************/
$(document).ready(function(){
	//INICIALIZO EL LISTADO
	refresh();
	
	$(".btn-new-item").click(function(){
		nuevoitemView();		
	});
		
	//BOTON REFRESH DEL MENU 
	$(".btn-refresh").click(function(){
		$("#lista .ullista li").remove
		$("#editar").html("");
		refresh();
	});
});
/**********************************/
//FUNCION REFRESH Y TRAER LOS ITEMS
/**********************************/
function refresh(){
		$.ajaxSetup({
			cache: false
		});

		var listaformload;
		/*******************************************************************/
		//CARGO LA LISTA QUE USO COMO TEMA PARA MANTENER HTML DE JS SEPARADO
		/*******************************************************************/
		$.get("lista.html", function( listaformload2 ) {
			 listaformload = listaformload2;
		});
		
		$.ajax({
		url : 'servicios/acciones.php?accion=listar',
		type : 'GET',
		dataType : 'json',
		beforeSend : function(){
			$(".loading").show() 
			},
		success : function(data) {
						if(data.status == 'error') {
								console.log("Error al traer los items")
						}
						if(data.status == 'ok') {
								$("#lista .ullista").html("");
								$("#countitem").html(data.total);
								$.each(data['items'], function(index, value) {
											var listadinamica = listaformload;
											listadinamica=listadinamica.replace('{{TITLE}}',value[1]);
											listadinamica=listadinamica.replace('{{DESCRIPTION}}',value[2]);
											listadinamica=listadinamica.replace('{{URL}}',value[4]);
											listadinamica=listadinamica.replace('{{ID}}',value[0]);
											listadinamica=listadinamica.replace('{{ID2}}',value[0]);
											listadinamica=listadinamica.replace('{{ID3}}',value[0]);
											$("#lista .ullista").append(listadinamica);
							});							
							updateformview();
							botonborrar();
							
							$(".loading").hide();
							$("#lista").show();
							return false;
						}
					}
	});
	/************************/
	//ASIGNO EL DRAG AND DROP
	/************************/
    $(".sortable").sortable({
		update:function(event, ui){
			//LLamo funcion Update
			updatesave();
		}
	});
    $( ".sortable" ).disableSelection();
	
	
}
	
	
/*****************************/
//FUNCION DE UPDATE ITEMS VIEW
/*****************************/
var updateform;
	 
function updateformview(){
		$.ajaxSetup({
			cache: false
		});
		
		$(".btn-editar").click(function(){
		
		$("#lista").hide();
		/**************************************************************/	
		//CARGO FORM UPDATE COMO TEMA PARA MANTENER HTML DE JS SEPARADO
		/**************************************************************/
		 $.get( "update.html", function( updateform2 ) {
			  updateform = updateform2
		 });
			
		var idlista = $(this).attr("rel");
				
		$.ajax({
		url : 'servicios/acciones.php?accion=lista&id='+idlista,
		type : 'GET',
		cache : false,
		dataType : 'json',
		beforeSend : function(){
			$(".loading").show() 
			},
		success : function(data) {
						if(data.status == 'error') {
								console.log("Error al traer el items")
						}
						if(data.status == 'ok') {
								$("#editar").html("");
								$.each(data['item'], function(index, value) {									
											 var formdinamico = updateform;
											 formdinamico=formdinamico.replace('{{TITLE}}',value[1]);
											 formdinamico=formdinamico.replace('{{DESCRIPTION}}',value[2]);
											 formdinamico=formdinamico.replace('{{URL}}',value[4]);
											 formdinamico=formdinamico.replace('{{URL2}}',value[4]);
											 formdinamico=formdinamico.replace('{{ID}}',value[0]);
										
											 $("#editar").append(formdinamico);
								});
						uploadimg();
						$("#editar").show()
						$(".loading").hide();
						savedata();
						cierroupdate();
						return false;
						}
					}
		});
			;
		});
		
}
/*************************/
//REFRESH DEL BOTON CERRAR
/*************************/
function cierroupdate(){
		$(".btn-close").click(function(){
			$("#editar").hide();
			refresh();
		});
}

/****************************************/
//FUNCION UPDATE ORDER
/****************************************/
function updatesave(){

	var ordenes = [];
	$('.ullista li').each(function(indice, elemento) {
	  ordenes.push($(elemento).attr("rel"));	
	});
	
	$.ajax({
		url : 'servicios/acciones.php?accion=orden',
		data : 'ordenes='+ordenes,
		type : 'POST',
		dataType : 'json',
		success : function(data) {
						if(data.status == 'error') {
							console.log("Error al guardar el orden");
						}
						if(data.status == 'ok') {
							//console.log("update OK");
						return false;
						}
					}
		});
}

/*************************/
//FUNCION UPDATE DE ITEM
/*************************/
function savedata(){
	uploadimg();
	$(".btn-savechanges").click(function(){
		var contenido = $("#formitems").serialize();
		$.ajax({
		url : 'servicios/acciones.php?accion=update',
		data : contenido,
		type : 'POST',
		dataType : 'json',
		beforeSend : function(){
			$(".loading").show() 
			},
		success : function(data) {
						if(data.status == 'error') {
							console.log("Error al guardar el orden");
						}
						if(data.status == 'ok') {
						$(".loading , #editar ").hide();
						refresh();
						return false;
						}
					}
		});
	});
}
/**********************/
/*FUNCION BORRAR ITEM*/
/**********************/
function botonborrar(){
	$(".btn-borrar-item").click(function(){
		var iddelete = $(this).attr("rel");
		var txt;
		var r = confirm("Confirm Delete?");
		if (r == true) {
			$.ajax({
				url : 'servicios/acciones.php?accion=delete',
				data : 'id='+iddelete,
				type : 'POST',
				dataType : 'json',
				beforeSend : function(){
					$(".loading").show() 
				},
				success : function(data) {
								if(data.status == 'error') {
									console.log("Error al guardar al eliminar");
								}
								if(data.status == 'ok') {
								$(".loading").hide();
								/***********************************************************************/
								//ELIMINO SOLO ESTE DESDE EL DOM PARA NO TENER QUE CARGAR TODOS DE NUEVO
								/***********************************************************************/
								$(".list-group-item[rel="+iddelete+"]").remove();
								$("#countitem").html($("#countitem").html() - 1);
								return false;
								}
							}
			});
		} 
	});
}

/****************************/
//FUNCION NUEVO ITEM
/****************************/
function nuevoitemView(){
	
	$("#lista").hide();
	/**************************************************************/	
	//CARGO FORM NEW COMO TEMA PARA MANTENER HTML DE JS SEPARADO
	/**************************************************************/
	 $.get( "new.html", function( formnew ) {
		 $("#editar").html("");
		  $("#editar").append(formnew);
		  $("#editar").show();
			cierroupdate();
			nuevoitem();
			uploadimg();
	 });
}

function nuevoitem(){	
	$(".btn-new-item-save").click(function(){
		
		var contenidoNew = $("#formnuevoitem").serialize();
		$.ajax({
		url : 'servicios/acciones.php?accion=new',
		data : contenidoNew,
		type : 'POST',
		dataType : 'json',
		beforeSend : function(){
			$(".loading").show() 
			},
		success : function(data) {
						if(data.status == 'error') {
							console.log("Error al guardar el nuevo item");
							console.log(data.mensaje);
						}
						if(data.status == 'ok') {
						$(".loading , #editar ").hide();
						refresh();
						return false;
						}
					}
		});
	});
	
}



/******************************/
//FUNCION PARA LA CARGA DE IMG
/*****************************/
function uploadimg(){
	
  $('#fileupload').fileupload({
        dataType: 'json',
        add: function (e, data) {
            $(".loading").show();
            data.submit();
        },
        done: function (e, data) {
			$("#files").html("");
			$(".loading").hide();
			$("#img-input , input[name='img']").val(data.url+"files/"+data.files[0].name);
			$("#files").append('<img width="320" height="320" src="'+data.url+'files/'+data.files[0].name+'">');
        }
    });
}


