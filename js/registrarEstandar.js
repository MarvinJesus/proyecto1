/*document.getElementById('btnRegistrar').addEventListener("click",function(){
    validarFormulario();
},false);*/



var contadorDereferncias=0;
var contValidaciones=0;
window.onload = function () {
document.formulario.txtNombre.focus();
document.formulario.addEventListener('submit', validarFormulario);

}


function validador(email){
  var teste=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]+)\.)+([a-zA-Z0-9]{2,4})+$/;
  return teste.test(email);
}


function validarFormulario(){
 contValidaciones=0;
var eRoles=document.getElementById('roles').selectedIndex;
 var eNombre = document.getElementById('txtNombre');
 var eApellido=document.getElementById('txtApellido');
 var eDireccion=document.getElementById('txtDireccion');
 var eEmail=document.getElementById('email');
 var eFechaNacimiento=document.getElementById('fechaNacimiento');

 var pais = document.getElementById("paises").selectedIndex;
 var identificacion= document.getElementById("tipoIdentificacion").selectedIndex;
 var eFemenino=document.getElementById('rbtFemenino');
 var eMasculino=document.getElementById('rbtMasculino');
 var eTelefono=document.getElementById('txtTelefono');



 var eNombreUsuario=document.getElementById('txtNombreUsuario');
 var eContrasena=document.getElementById('paswContrasena');
 var eConfirmarContrasena=document.getElementById('paswConfirmarContrasena');
 var eSiPadeceLesion=document.getElementById('rbtSiPadeceLesion');
 var eNoPadeceLesion=document.getElementById('rbtNoPadeceLesion');
 var eReferencia=document.getElementById('txtReferencia');
 var eSelect=document.getElementById('paises');
 var erorr=true;



   if(eNombre.value.length==0){

      $('#alert').html('Debe ingresar un nombre').slideDown(500);
      $('#txtNombre');
      eNombre.className='errorStyle';
      erorr=false;
      return false;


   }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eNombre.className='bienStyle';
   }




   if(eApellido.value.length==0){

      $('#alert').html('Debe ingresar sus apellidos').slideDown(500);
      $('#txtApellido');
      eApellido.className='errorStyle';
      erorr=false;
      return false;

   }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eApellido.className='bienStyle';
   }




   if(eDireccion.value.length==0){

      $('#alert').html('Debe ingresar sus dirección').slideDown(500);
      $('#txtDireccion');
      eDireccion.className='errorStyle';
        erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eDireccion.className='bienStyle';
   }


   if(eEmail.value.length==0){

      $('#alert').html('Debe ingresar sus correo electrónico').slideDown(500);
      $('#email');
      eEmail.className='errorStyle';
        erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eEmail.className='bienStyle';
   }


   if(validador(eEmail.value)==false){

      $('#alert').html('Debe ingresar sus correo electrónico valido').slideDown(500);
      $('#email');
       eEmail.className='errorStyle';
        erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eEmail.className='bienStyle';
   }


   if(eFechaNacimiento.value.length==0){

      $('#alert').html('Debe ingresar la fecha de nacimiento').slideDown(500);
      $('#fechaNacimiento');
      eFechaNacimiento.className='errorStyle';
        erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eFechaNacimiento.className='bienStyle';
   }


  if( pais == null || pais == 0 ) {
       $('#alert').html('Debe ingresar la fecha de nacimiento').slideDown(500);
      $('#paises');
      paises.className='errorStyle';
       erorr=false;
      return false;
  }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     paises.className='bienStyle';

   }

    var eMasculino=document.getElementById('rbtMasculino');
    var eFemenino=document.getElementById('rbtFemenino');

    if(!document.getElementById('rbtMasculino').checked && !document.getElementById('rbtFemenino').checked) {

      $('#alert').html('Debe ingresar su género').slideDown(500);
      $('#rbtMasculino');
        eMasculino.className='errorStyle';
        eFemenino.className='errorStyle';
        erorr=false;
        return false;

    }else{
      if(!document.getElementById('rbtFemenino').checked) {
            eMasculino.className='bienStyle';
            eFemenino.className='bienStyle';
            erorr=true;
            contValidaciones=contValidaciones+1;


      }
    }


   if(eTelefono.value.length==0){

      $('#alert').html('Debe ingresar su teléfono').slideDown(500);
      $('#txtTelefono');
      eTelefono.className='errorStyle';
        erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     contValidaciones=contValidaciones+1;
     eTelefono.className='bienStyle';
   }


    if (!/^([0-9])+([^-])*$/.test(eTelefono.value)  ){

          $('#alert').html('Debe ingresar un telefono valido').slideDown(500);
          $('#txtTelefono');
          eTelefono.className='errorStyle';
          erorr=false;
          return false;
      }
    if (!/^([0-9]{8})*$/.test(eTelefono.value)  ){
        $('#alert').html('Debe ingresar un telefono de 8 numeros maximo').slideDown(500);
          $('#txtTelefono');
          eTelefono.className='errorStyle';
          erorr=false;
          return false;
    }else{
        $('#alert').html('').slideUp(300);
        erorr=true;
        contValidaciones=contValidaciones+1;
        eTelefono.className='bienStyle';

    }


   if( identificacion == null || identificacion == 0 ) {
       $('#alert').html('Debe ingresar un tipo de identificación').slideDown(500);
      $('#tipoIdentificacion');
      tipoIdentificacion.className='errorStyle';
        erorr=false;
      return false;
  }else{

     $('#alert').html('').slideUp(300);
      erorr=true;
     contValidaciones=contValidaciones+1;
     tipoIdentificacion.className='bienStyle';

   }








if( document.getElementById( 'cedula'))
    {

        var eCedula=document.getElementById('cedula');

           if(eCedula.value.length==0){

              $('#alert').html('Debe ingresar su cedula').slideDown(500);
              $('#cedula');
              eCedula.className='errorStyle';
                erorr=false;
              return false;


           }

        if (!/^([0-9]{9})*$/.test(eCedula.value)  ){

          $('#alert').html('Debe ingresar una cédula valida').slideDown(500);
          $('#cedula');
          eCedula.className='errorStyle';
          erorr=false;
          return false;

           }else{
             $('#alert').html('').slideUp(300);
             erorr=true;
             contValidaciones=contValidaciones+1;
             eCedula.className='bienStyle';
           }


      }





if( document.getElementById( 'pasaporte'))
    {

        var ePasaporte=document.getElementById('pasaporte');

        if(ePasaporte.value.length==0){

              $('#alert').html('Debe ingresar su pasaporte').slideDown(500);
              $('#pasaporte');
              ePasaporte.className='errorStyle';
              erorr=false;
              return false;
        }


        if (!/^([0-9]{8})*$/.test(ePasaporte.value) ){

              $('#alert').html('Debe ingresar un pasaporte valido').slideDown(500);
              $('#pasaporte');
              ePasaporte.className='errorStyle';
              erorr=false;
              return false;

         }else{

             $('#alert').html('').slideUp(300);
             erorr=true;
             ePasaporte.className='bienStyle';
        }


    }


if( document.getElementById( 'cedulaRecidencia'))
    {

        var eCedulaRecidencia=document.getElementById('cedulaRecidencia');

           if(eCedulaRecidencia.value.length==0){

              $('#alert').html('Debe ingresar su cedula de recidencia').slideDown(500);
              $('#cedulaRecidencia');
              eCedulaRecidencia.className='errorStyle';
              erorr=false;
              return false;


           }

        if (!/^([0-9]{8})*$/.test(eCedulaRecidencia.value) ){

              $('#alert').html('Debe ingresar una cedula de recidencia  valido').slideDown(500);
              $('#pasaporte');
              eCedulaRecidencia.className='errorStyle';
              erorr=false;
              return false;

         }else{

             $('#alert').html('').slideUp(300);
             erorr=true;
             eCedulaRecidencia.className='bienStyle';
        }


 }













 if(eNombreUsuario.value.length==0){

      $('#alert').html('Debe ingresar un nombre de usuario').slideDown(500);
      $('#txtNombreUsuario');
      eNombreUsuario.className='errorStyle';
      erorr=false;
      return false;

    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     eNombreUsuario.className='bienStyle';
   }


    if(eContrasena.value.length==0){

      $('#alert').html('Debe escribir su contraseña').slideDown(500);
      $('#paswContrasena');
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     eContrasena.className='bienStyle';

   }

    if(eConfirmarContrasena.value.length==0){

      $('#alert').html('Debe validar su contraseña').slideDown(500);
      $('#paswConfirmarContrasena');
         erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     eConfirmarContrasena.className='bienStyle';

   }




    if(eContrasena.value!=eConfirmarContrasena.value){

      $('#alert').html('Las contraseñaS no coinciden').slideDown(500);
      $('#paswContrasena').val('');
      $('#paswConfirmarContrasena').val('');
      $('#paswContrasena');
      erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;

   }




   /*if(eReferencia.value.length==0){

      $('#alert').html('Debe ingresar una referencia').slideDown(500);
      $('#txtReferencia').focus();
      eReferencia.className='errorStyle';
      erorr=false;
      return false;
    }else{

     $('#alert').html('').slideUp(300);
     erorr=true;
     eReferencia.className='bienStyle';
   }*/

  if(erorr===true){

      window.location.assign('inicioCliente.html');
  }



}

// Inicio de almacenamiento de local Storange

function guardarDatos(){

  localStorage.roles='Rol:'+" "+document.formulario.roles.value;
   localStorage.nombre='Nombre:'+"  " +document.formulario.txtNombre.value;
   localStorage.apellido='Apellido:'+"  " +document.formulario.txtApellido.value;
   localStorage.dirreccion='Direccion:'+" " +document.formulario.txtDireccion.value;
   localStorage.email='E-mail:'+" " +document.formulario.email.value;
   localStorage.fechaNacimiento='Fecha de Nacimiento:'+" " +document.formulario.fechaNacimiento.value;
   localStorage.nacionalidad='Nacionalidad:'+" " +document.formulario.paises.selectedIndex;
   localStorage.genero='Genero:'+" " +document.formulario.rbtGenero.value;
   localStorage.identificacion='Identificacion:'+" " +document.formulario.tipoIdentificacion.selectedIndex;
   localStorage.nombreUsuario='Nombre de  usuario:'+" " +document.formulario.txtNombreUsuario.value;
   localStorage.contraseña='Contraseña:'+" " +document.formulario.paswContrasena.value;
   //localStorage.imagen='Imagen:'+" " +document.formulario.foto.value;
   //localStorage.referencia='Referencia:'+" " +document.formulario.txtReferencia.value;
   //localStorage.lesion='Lesiones:'+" " +document.formulario.TextArea1.value;
   //localStorage.padecimiento='Padecimientos:'+" " +document.formulario.TextArea2.value;

    if(document.getElementById('cedula')){
        localStorage.cedula='Cedula:'+" " +document.formulario.cedula.value;
        var vcedula=localStorage.cedula;

    }
    if(document.getElementById('pasaporte')){
        localStorage.pasaporte='Pasaporte:'+" " +document.formulario.pasaporte.value;
        var vPasaporte=localStorage.pasaporte;

    }

    if(document.getElementById('cedulaRecidencia')){
        localStorage.cedulaRecidencia='Cedula de recidencia:'+" " +document.formulario.cedulaRecidencia.value;
        var vCedulaRecidencia=localStorage.cedulaRecidencia;

    }
    if(document.getElementById('referencia1 ')){
        localStorage.nombreDeReferencia='Nombre De la Referencia:'+" " +document.formulario.referencia1 .value;
        var vNombreDeReferencia=localStorage.nombreDeReferencia;

    }
    if(document.getElementById('referencia2 ')){
        localStorage.telefonoDeLeReferencia='Telefono de la referencia:'+" " +document.formulario.referencia2 .value;
        var vTelefonoDeLaReferencia=localStorage.telefonoDeLeReferencia;

    }


    alert(vcedula);
    alert(vPasaporte);
    alert(vCedulaRecidencia);
    alert(vNombreDeReferencia);
    alert(vTelefonoDeLaReferencia);


    var roles=localStorage.roles;
    var nombre=localStorage.nombre;
    var apellido=localStorage.apellido;
    var dirreccion=localStorage.dirreccion;
    var email=localStorage.email;
    var fechaNacimiento=localStorage.fechaNacimiento;
    var nacionalidad=localStorage.nacionalidad;
    var genero=localStorage.genero;
    var identificacion=localStorage.identificacion;

    var contraseña=localStorage.contraseña;
    var imagen=localStorage.imagen;
    var referencia=localStorage.referencia;
    //var lesion=localStorage.lesion;
    //var padecimiento=localStorage.padecimiento;


    /*var datos=[nombre,apellido,dirreccion,email,fechaNacimiento,nacionalidad,genero,identificacion,contraseña,imagen,referencia,lesion,padecimiento];

    for(var i=0; i<datos.length;i++){
        alert(datos[i]);
    }
    */

}
// Fin de almacenamiento de local Storange


//Inicia validar contraseña



function mostrarPassword1(){
    //Accedo a los elementos del formulario mediante el DOM
    var chkbox = document.getElementById("mostrar1");
    var password1 = document.getElementById("paswContrasena");
    var password2 = document.getElementById("paswConfirmarContrasena");


    //Pregunto si el checkbox esta marcado
    if(chkbox.checked){
      password1.setAttribute("type","password"); //Si el checkbox esta marcado, el atributo type vale password
      password2.setAttribute("type","password"); //Si el checkbox esta marcado, el atributo type vale password
    }else{
      password1.setAttribute("type","text"); //Si el checkbox esta sin marcar, el atributo type vale text
      password2.setAttribute("type","text"); //Si el checkbox esta sin marcar, el atributo type vale text
    }
  }



  function crearInputNacionalidad () {
    var nacionalidad;
    nacionalidad = document.formulario.tipoIdentificacion[document.formulario.tipoIdentificacion.selectedIndex].value ;

    switch (nacionalidad){
       case "cedula":

                  labe1 = document.createElement("label")
                  labe1.setAttribute("id", "lCedula");
                  var texto = document.createTextNode("Cedula");
                  labe1 .appendChild(texto);
                  labe1.setAttribute("for","cedula");
                  document.getElementById("contenedor1").appendChild(labe1);


                  caja1 = document.createElement("input");
                  caja1.setAttribute("type", "text");
                  caja1.setAttribute("id", "cedula");
                  caja1.setAttribute("name", "cedula");
                  caja1.setAttribute("placeholder", "ingrese su cedula");
                  document.getElementById("contenedor1").appendChild(caja1);
                  $('#cedula').focus();
                  document.getElementById('cedula').addEventListener('onblur',validarFormulario(),guardarDatos(),false);


                 $( document.getElementById("contenedor2") ).empty();
                 $( ".input" ).empty();

                 $( document.getElementById("contenedor3") ).empty();
                 $( ".input" ).empty();






       break;

       case "pasaporte":

                  labe2 = document.createElement("label")
                  labe2.setAttribute("id", "lPasaporte");
                  var texto = document.createTextNode("Pasaporte");
                  labe2 .appendChild(texto);
                  labe2.setAttribute("for","pasaporte");
                  document.getElementById("contenedor2").appendChild(labe2);

                  caja2 = document.createElement("input");
                  caja2.setAttribute("type", "text");
                  caja2.setAttribute("id", "pasaporte");
                  caja2.setAttribute("name", "pasaporte");
                  caja2.setAttribute("placeholder", "Ingrese su pasaporte");
                  document.getElementById("contenedor2").appendChild(caja2);
                  $('#pasaporte').focus();
                  document.getElementById('pasaporte').addEventListener('onblur',validarFormulario(),guardarDatos(),false);

                 $( document.getElementById("contenedor1") ).empty();
                 $( ".input" ).empty();

                 $( document.getElementById("contenedor3") ).empty();
                 $( ".input" ).empty();


       break;

       case "cedulaRecidencia":

                  labe3 = document.createElement("label")
                  labe3.setAttribute("id", "lCedulaRecidencia");
                  var texto = document.createTextNode("Cedula Recidencia");
                  labe3 .appendChild(texto);
                  labe3.setAttribute("for","cedulaRecidencia");
                  document.getElementById("contenedor3").appendChild(labe3);

                  caja3 = document.createElement("input");
                  caja3.setAttribute("type", "text");
                  caja3.setAttribute("id", "cedulaRecidencia");
                  caja3.setAttribute("name", "cedulaRecidencia");
                  caja3.setAttribute("placeholder", "Ingrese su cedula de recidencia");
                  document.getElementById("contenedor3").appendChild(caja3);
                  $('#cedulaRecidencia').focus();
                  document.getElementById('cedulaRecidencia').addEventListener('onblur',validarFormulario(),guardarDatos(),false);

                  $( document.getElementById("contenedor1") ).empty();
                 $( ".input" ).empty();

                 $( document.getElementById("contenedor2") ).empty();
                 $( ".input" ).empty();


           break;

       default:

           break;
    }



 }


function mostrarTextareaLesiones(v){
    var limpiar=document.getElementById('TextArea1');
    if(v.id=="rbtSiPadeceLesion"){
        document.getElementById("TextArea1").style.visibility = "visible";
    }else{
        limpiar.value=" ";
        document.getElementById("TextArea1").style.visibility = "hidden";
    }
}

function mostrarTextareaPadecimiento(v){
     var limpiar=document.getElementById('TextArea2');
    if(v.id=="rbtSiPadeceEnfermedad"){
        document.getElementById("TextArea2").style.visibility = "visible";
    }else{
        limpiar.value=" ";
        document.getElementById("TextArea2").style.visibility = "hidden";
    }
}



function AgregarReferncias()
{

 if(!document.getElementById('referencia1')){

      label1= document.createElement("label");
      label1.id='contacto1';
      var texto1 = document.createTextNode("Nombre de la referencia ");
      label1.appendChild(texto1);
      label1.for='contacto1';
      document.getElementById("referncias").appendChild(label1);

      var nuevoContacto = document.createElement('input');
      nuevoContacto.type='text';
      nuevoContacto.name='contacto1';
      nuevoContacto.id='referencia1';
      nuevoContacto.placeholder='Escriba el nombre de la referencia ';
      document.getElementById('referncias').appendChild(nuevoContacto);
      document.getElementById('referncias').appendChild(document.createElement('br'));
      document.getElementById('referencia1').addEventListener('onblur',guardarDatos(),false);

      label2= document.createElement("label");
      label2.id='contacto2';
      var texto2 = document.createTextNode("Telefono de la referencia");
      label2.appendChild(texto2);
      label2.for='contacto2';
      document.getElementById("referncias").appendChild(label2);

      nuevoContacto = document.createElement('input');
      nuevoContacto.type='text';
      nuevoContacto.name='contacto2';
      nuevoContacto.id='referencia2';
      nuevoContacto.placeholder='Escriba el telefono de la referencia';
      document.getElementById('referncias').appendChild(nuevoContacto);
      document.getElementById('referncias').appendChild(document.createElement('br'));
      document.getElementById('referencia2').addEventListener('onblur',guardarDatos(),false);



 }else{
     $( document.getElementById("referncias") ).empty();
     $( ".input" ).empty();


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
         document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
        };
    })(f);
    reader.readAsDataURL(f);
  }
}

document.getElementById('files').addEventListener('change', archivo, false);
