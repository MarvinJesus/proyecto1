var btnResponderUsuario = document.querySelector('#btnRespuesta');

btnResponderUsuario.addEventListener('click',validarUsuario);

function validarUsuario(){
  var txtRespuesta = document.querySelector('#respuesta');
  var txtCorreo = document.querySelector('#correoUsuario');
  msj = document.querySelector('#msj');

  var respuesta = txtRespuesta.value;
  var correo = txtCorreo.value;
  var respuestaUsuario = localStorage.getItem("RespuestaCliente");
  var correoUsuario = localStorage.getItem("CorreoCliente");

  if(correoUsuario == correo){
    if(respuestaUsuario == respuesta){
      var contrasena = localStorage.getItem("ContrasenaCliente");
      msj.innerHTML = "La contraseña es: "+contrasena;

    }else {
      msj.innerHTML = "Respuesta Incorrecta";
    }
  }else{
    msj.innerHTML = "Correo no encontrado";
  }
}
