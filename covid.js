$( window ).load(function() {
  let searchParams = new URLSearchParams(window.location.search);
  let clave = searchParams.get('id1');
  let codigo = searchParams.get('id2');
  $('#id1').val(clave);
  $('#id2').val(codigo);
});




$('body').click(function() {
   $('#modalcontenedor').hide();
});

$('#buscar').click(function(event){
	
  var noclickeo = $('#yaclickeo').val();
  var id1 =  $('#id1').val();
  var id2 =  $('#id2').val();
  
  if(noclickeo == 0){
	$('#modalerror').show();

  } else {

  		if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ca") && (id2="1633986730888") ) {

		$('#modalcontenedor').show();
             document.getElementById('modalcontenedor').style.opacity = "1"; 
             document.getElementById('modal').style.opacity = "1";
             $( "#modalcontenedor" ).addClass( "swal-overlay--show-modal" );
 			 event.stopPropagation();

  		} else { $('#modalerror').show();  }

      }

});

$("#modalcontenedor").click(function(e){
    e.stopPropagation();
});

$("#botoncerrar").click(function(e){
    $('#modalcontenedor').hide();
});

$("#okdeerror").click(function(e){
    $('#modalerror').hide();
});


$("#contendorrecaptcha").click(function(e){
	var noclickeo = $('#yaclickeo').val();

	if(noclickeo == 0 ) {
	$('#cuadraditocaptcha').hide();
	$('#spinner').show(1).delay(1100).hide(1);
	$('#checkimagen').delay(1000).show(1)
	$('#yaclickeo').val(1);
	}


});





