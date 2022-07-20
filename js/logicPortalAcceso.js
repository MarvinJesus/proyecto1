 var btnIngresar2 = document.querySelector('#btnIngresar');
var btnIngresar = document.querySelector('#btnIngresar2');

btnIngresar.addEventListener('click',ingresarUsuario);
btnIngresar2.addEventListener('click',ingresarEmpleado);

function ingresarUsuario(){

  var txtCorreo = document.querySelector('#txtCorreo2');
  var txtContrasena = document.querySelector('#txtContrasena2');

  var correo = localStorage.getItem("CorreoCliente");
  var contrasena = localStorage.getItem("ContrasenaCliente");
  var correoUsuario = txtCorreo.value;
  var contrasenaUsuario =  txtContrasena.value;

  if("correoUsuario"=="correoUsuario"){ //correo
    if("contrasenaUsuario"=="contrasenaUsuario"){ //contrasena
      txtCorreo.classList.remove('error');
      txtContrasena.classList.remove('error');
      window.open("inicioCliente.html","_self");
    }else{
      txtCorreo.classList.remove('error');
      txtContrasena.classList.add('error');
    }
  }else{
    txtCorreo.classList.add('error');
    if(contrasenaUsuario == ""){
      txtContrasena.classList.add('error');
    }
  }
}

function ingresarEmpleado(){

  var txtCorreo = document.querySelector('#txtCorreo');
  var txtContrasena = document.querySelector('#txtContrasena');

  var correo = localStorage.getItem("CorreoEmpleado");
  var contrasena = localStorage.getItem("ContrasenaEmpleado");
  var correoEmpleado = txtCorreo.value;
  var contrasenaEmpleado =  txtContrasena.value;

  if(correoEmpleado == "admin" &&  contrasenaEmpleado == "admin"){
    window.open("inicioAdmin.html","_self");
  }else{
    if(correoEmpleado == "secretario" &&  contrasenaEmpleado == "secretario"){
      window.open("inicioSecretaria.html","_self");
    }else{
      if(correoEmpleado == "instructor" &&  contrasenaEmpleado == "instructor"){
       window.open("inicioInstructor.html","_self");
      }else{
        if(correo==correoEmpleado){
          if(contrasena==contrasenaEmpleado){
            txtCorreo.classList.remove('error');
            txtContrasena.classList.remove('error');
            window.open("inicioInstructor.html","_self");
          }else{
            txtCorreo.classList.remove('error');
            txtContrasena.classList.add('error');
          }
        }else{
          txtCorreo.classList.add('error');
          if(contrasenaUsuario == ""){
            txtContrasena.classList.add('error');
          }
        }
      }
    }
  }
}
