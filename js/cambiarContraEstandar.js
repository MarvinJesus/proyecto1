var elementoGuardar=document.querySelector('#guardar');
elementoGuardar.addEventListener('click',aGuardar);

function aGuardar() {
   var validador=true;
   var contrasennaActual = document.getElementById("password").value;
   var confirmeContraActual = document.getElementById("confirmeContra").value;

 var contraNueva = document.getElementById("contraNueva").value;

  var elementoDivError = document.querySelector('#divError');

  if (contrasennaActual != confirmeContraActual) {
    validador=false;
    elementoDivError.classList.remove('ocultar');

  }else{
    validador=true;
    elementoDivError.classList.add('ocultar');
    localStorage.setItem("Contraseña nueva", contraNueva);
    if (contraNueva=='') {
    }else {
      $('#alert').html('¡La contraseña se cambio con exito!').slideDown(500);
    }
  }


}
