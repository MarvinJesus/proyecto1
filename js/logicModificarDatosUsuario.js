var btnRegistrar = document.querySelector('#btnRegistrar');
document.getElementById('files').addEventListener('change', archivo, false);
btnRegistrar.addEventListener('click',validar);

function validar(){
  var txtNombre = document.querySelector('#txtNombre');
  var txtApellido = document.querySelector('#txtApellido');
  var txtDireccion = document.querySelector('#txtDireccion');
  var txtEmail = document.querySelector('#txtEmail');
  var txtEmail2 = document.querySelector('#txtEmail2');
  var txtContrasena = document.querySelector('#txtContrasena');
  var txtContrasena2 = document.querySelector('#txtContrasena2');
  var txtTelefono = document.querySelector('#txtTelefono');
  var files = document.querySelector('#files');

  if(txtNombre.value != ""){
    localStorage.setItem('nomUsuario',txtNombre.value);
  }

  if(txtApellido.value != ""){
    localStorage.setItem('apellidoUsuario',txtApellido.value);
  }

  if(txtDireccion.value != ""){
    localStorage.setItem('direccionUsuario',txtApellido.value);
  }

  if(txtEmail.value != ""){
    var resul = validarEmail(txtEmail.value);
    if(resul){
      txtEmail.classList.remove('error');
      if(txtEmail.value == txtEmail2.value){
       txtEmail2.classList.remove('error');
       localStorage.setItem('CorreoCliente',txtEmail.value);
      }else{
       txtEmail2.classList.add('error');
      }
    }else{
      txtEmail.classList.add('error');
    }
  }

  if(txtContrasena.value != ""){
    resul = validarContrasena(txtContrasena);
    if(txtContrasena.value != ""){
      var resul = validarContrasena(txtContrasena.value);
      if(resul){
        txtContrasena.classList.remove('error');
        if(txtContrasena.value == txtContrasena2.value){
         txtContrasena2.classList.remove('error');
         localStorage.setItem('ContrasenaCliente',txtContrasena.value);
        }else{
         txtContrasena2.classList.add('error');
        }
      }else{
        txtContrasena.classList.add('error');
      }
    }
  }

  if(txtTelefono != ""){
    resul = validarTelefono(txtTelefono.value);
    if(resul){
      txtTelefono.classList.remove('error');
      localStorage.setItem('TelefonoCliente',txtTelefono.value);
    }else{
      txtTelefono.classList.add('error');
    }
  }

  //var opc = comprueba_extension(files.value);

  //if(opc){
    //Agregar foto
  //}

}

function comprueba_extension(pimagen) {
   extensiones_permitidas = new Array(".png", ".jpg");
   mierror = "";
   if (!pimagen) {
      	mierror = "No has seleccionado ningún archivo";
   }else{
      extension = (pimagen.substring(pimagen.lastIndexOf("."))).toLowerCase();
      permitida = false;
      for (var i = 0; i < extensiones_permitidas.length; i++) {
         if (extensiones_permitidas[i] == extension) {
         permitida = true;
         break;
         }
      }
      if (!permitida) {
         mierror = "Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extensiones: " + extensiones_permitidas.join();
       }else{
         return true;
       }
   }
   return false;
}

function archivo(evt) {
  var files = evt.target.files; // FileList object

  // Obtenemos la imagen del campo "file".
  for (var i = 0, f; f = files[i]; i++) {
    //Solo admitimos imágenes.
    if (!f.type.match('image.*')) {
        continue;
    }

    var reader = new FileReader();

    reader.onload = (function(theFile) {
        return function(e) {
          // Insertamos la imagen
         document.getElementById("list").innerHTML = ['<img class="thumb" id="imagen" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
        };
    })(f);
    reader.readAsDataURL(f);
  }
}

function validarTelefono(telefono){
  var resul = true;
  if( !(/^\d{8}$/.test(telefono)) ) {
    resul = false;
  }
  return resul;
}

function validarEmail( email ) {
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var resul = true;
    if(!expr.test(email)){
      resul = false;
    }
    return resul;
}

function validarContrasena(contrasena){

  return true;
}
