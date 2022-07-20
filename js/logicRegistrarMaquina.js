var btnIngresar = document.querySelector('#btnRegistrar');
document.getElementById('files').addEventListener('change', archivo, false);

btnIngresar.addEventListener('click',registrar);

function registrar(){
  var txtNomMaquina = document.querySelector('#txtNomMaq');
  var txtCod = document.querySelector('#txtCondigo');
  var imagenMaq = document.querySelector('#files');
  var error = document.querySelector('#txtError');

  var nomMaquina = txtNomMaquina.value;
  var cod =  txtCod.value;
  var img = imagenMaq.value;

  var opc = comprueba_extension(img);

  if(!opc || nomMaquina == "" || cod == "" ){
    error.classList.remove('ocultar');
  }else{
    error.classList.add('ocultar');
    localStorage.setItem('nomMaquina',nomMaquina);
    localStorage.setItem('codigoMaquina',("maq-"+cod));
  }
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

function valida(e){
  tecla = (document.all) ? e.keyCode : e.which;

  //Tecla de retroceso para borrar, siempre la permite
  if (tecla==8){
      return true;
  }

  // Patron de entrada, en este caso solo acepta numeros
  patron =/[0-9]/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}
