var elementoCalcular=document.querySelector('#calcularRm');

elementoCalcular.addEventListener('click',calcular);
function calcular() {
  var validador=true;
  var elementoIdUsuario=document.querySelector('#idUsuario');
  var usuarioId=elementoIdUsuario.value;
  var elementoFecha=document.querySelector('#fecha1Rm');
  var fecha=elementoFecha.value;
  var elementoPruebaRe=document.querySelector('#pruebaRe');
  var pruebaResistencia=elementoPruebaRe.value;
  var elementoDivError = document.querySelector('#divError');

  var rM1=document.querySelector('#unRm')
  var unRM=rM1.value;

  var rM5=document.querySelector('#cincoRm')
  var cincoRM=rM5.value;

  var rM8=document.querySelector('#ochoRm')
  var ochoRM=rM8.value;



//Tabla De Calcular //
  var abdomenPrimerIntento=document.querySelector('#abdomenPrimerIntento');
  var abdomen1er=abdomenPrimerIntento.value;
  var abdomenSegundoIntento=document.querySelector('#abdomenSegundoIntento');
  var abdomen2do=abdomenSegundoIntento.value;
  var abdomenTercerIntento=document.querySelector('#abdomenTercerIntento');
  var abdomen3er=abdomenTercerIntento.value;

  var pechoPrimerIntento=document.querySelector('#pechoPrimerIntento');
  var pecho1er=pechoPrimerIntento.value;
  var pechoSegundoIntento=document.querySelector('#pechoSegundoIntento');
  var pecho2do=pechoSegundoIntento.value;
  var pechoTercerIntento=document.querySelector('#pechoTercerIntento');
  var pecho3er=pechoTercerIntento.value;

  var brazosPrimerIntento=document.querySelector('#brazosPrimerIntento');
  var brazos1er=brazosPrimerIntento.value;
  var brazosSegundoIntento=document.querySelector('#brazosSegundoIntento');
  var brazos2do=brazosSegundoIntento.value;
  var brazosTercerIntento=document.querySelector('#brazosTercerIntento');
  var brazos3er=brazosTercerIntento.value;

  var piernasPrimerIntento=document.querySelector('#piernasPrimerIntento');
  var piernas1er=piernasPrimerIntento.value;
  var piernasSegundoIntento=document.querySelector('#piernasSegundoIntento');
  var piernas2do=piernasSegundoIntento.value;
  var piernasTercerIntento=document.querySelector('#piernasTercerIntento');
  var piernas3er=piernasTercerIntento.value;

  var espaldaPrimerIntento=document.querySelector('#espaldaPrimerIntento');
  var espalda1er=espaldaPrimerIntento.value;
  var espaldaSegundoIntento=document.querySelector('#espaldaSegundoIntento');
  var espalda2do=espaldaSegundoIntento.value;
  var espaldaTercerIntento=document.querySelector('#espaldaTercerIntento');
  var espalda3er=espaldaTercerIntento.value;
  var objetivoCliente=document.querySelector('#objetivoCliente');
  var objecCliente=objetivoCliente.value;

//prueba Resistencia
if (unRm=pruebaResistencia) {
    calcular=abdomen1er*1.00;
  }
if (cincoRM=pruebaResistencia) {
  calcular=abdomen1er*0.82;
}
if (ochoRM=pruebaResistencia) {
  calcular=abdomen1er*0.70;
}
if (unRM=pruebaResistencia) {
  calcular=pecho1er*1.00;
}
//validaciones //

  if (usuarioId=='') {
    validador=true;
    elementoIdUsuario.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else{
    validador=false;
    elementoIdUsuario.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (fecha=='') {
    validador=true;
    elementoFecha.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  } else {
    validador=false;
    elementoFecha.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (pruebaResistencia=='') {
    validador=true;
    elementoPruebaRe.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else{
    validador=false;
    elementoPruebaRe.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }

  if (abdomen1er=='') {
    validador=true;
    abdomenPrimerIntento.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else {
    validador=false;
    abdomenPrimerIntento.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (pecho1er=='') {
    validador=true;
    pechoPrimerIntento.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else {
    validador=false;
    pechoPrimerIntento.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (piernas1er=='') {
    validador=true;
    piernasPrimerIntento.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else {
    validador=false;
    piernasPrimerIntento.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (brazos1er=='') {
    validador=true;
    brazosPrimerIntento.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else {
    validador=false;
    brazosPrimerIntento.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (espalda1er=='') {
    validador=true;
    espaldaPrimerIntento.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else {
    validador=false;
    espaldaPrimerIntento.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }
  if (objecCliente=='') {
    validador=true;
    objetivoCliente.classList.add('error');
    elementoDivError.classList.remove('ocultar');
  }else {
    validador=false;
    objetivoCliente.classList.remove('error');
    elementoDivError.classList.add('ocultar');
  }

  if (!validador==true) {
    $('#alert2').html('¡El calculo fue exitoso!').slideDown(500);
  }else {
  }




  if (usuarioId=='' || fecha=='' || pruebaResistencia=='' || abdomen1er=='' || pecho1er=='' || brazos1er=='' || piernas1er=='' || espalda1er=='') {
    elementoDivError.classList.remove('ocultar');
  }else {
    elementoDivError.classList.add('ocultar');
  }






//Guardar en localStorage//
  localStorage.setItem('ID',usuarioId);
  localStorage.setItem('Fecha:',fecha);
  localStorage.setItem('Prueba de Resistencia',pruebaResistencia);
  localStorage.setItem('Abdomen 1er Intento',abdomen1er);
  localStorage.setItem('Abdomen 2do Intento',abdomen2do);
  localStorage.setItem('Abdomen 3er Intento',abdomen3er);
  localStorage.setItem('Pecho 1er Intento',pecho1er);
  localStorage.setItem('Pecho 2do Intento',pecho2do);
  localStorage.setItem('Pecho 3er Intento',pecho3er);
  localStorage.setItem('Brazos 1er Intento',brazos1er);
  localStorage.setItem('Brazos 2do Intento',brazos2do);
  localStorage.setItem('Brazos 3er Intento',brazos3er);
  localStorage.setItem('Piernas 1er Intento',piernas1er);
  localStorage.setItem('Piernas 2do Intento',piernas2do);
  localStorage.setItem('Piermas 3er Intento',piernas3er);
  localStorage.setItem('Espalda 1er Intento',espalda1er);
  localStorage.setItem('Espalda 2do Intento',espalda2do);
  localStorage.setItem('Espalda 3er Intento',espalda3er);
  localStorage.setItem('El 1RM es',calcular);
  localStorage.setItem('prueba',abdomenTeorico);



}
function tipoPrueba(){
  if (pruebaRe.value==1RM) {
    calcular1RM();
  }else {
    if (pruebaRe.value==5RM) {
      calcular5RM();
    }else {
      calcular8RM();
    }
  }
}
function celda1() {
  var c1f1=document.querySelector('#abdomenPrimerIntento');
  var c2f1=document.querySelector('#abdomenSegundoIntento');
  var c3f1=document.querySelector('#abdomenTercerIntento');
  var 1RMf1=document.querySelector('#abdomenTeorico');
  var fila1[]=[c1f1.value,c2f1.value,c3f1.value];
  if (c3f1.value==0) {
    1RMf1.value=c1f1.value;
  }else {

  }
}
function celda2(){
  var c1f2=document.querySelector('#pechoPrimerIntento');
  var c2f2=document.querySelector('#pechoSegundoIntento');
  var c3f2=document.querySelector('#pechoTercerIntento');
  var 1RMf2=document.querySelector('#pechoTeorico');
  var fila2[]=[c1f2.value,c2f2.value,c3f2.value];
  if(c3f2.value==0){
    1RMf2.value=c1f2.value;
  }else {

  }
}

function celda3(){
  var c1f3=document.querySelector('#brazosPrimerIntento');
  var c2f3=document.querySelector('#brazosSegundoIntento');
  var c3f3=document.querySelector('#brazosTercerIntento');
  var 1RMf3=document.querySelector('#brazoTeorico');
  var fila3[]=[c1f3.value,c2f3.value,c3f3.value];
  if (c3f3.value==0) {
    1RMf3.value=c1f3.value;
  }else {

  }
}
function celda4() {
  var c1f4=document.querySelector('#piernasPrimerIntento');
  var c2f4=document.querySelector('#piernasSegundoIntento');
  var c3f4=document.querySelector('#piernasTercerIntento');
  var 1RMf4=document.querySelector('#piernaTeorico');
  var fila4[]=[c1f4.value,c2f4.value,c3f4.value];
  if (c3f4.value==0) {
    1RMf4.value=c1f4.value;
  }else {

  }
}
function celda5(){
  var c1f5=document.querySelector('#espaldaPrimerIntento');
  var c2f5=document.querySelector('#espaldaSegundoIntento');
  var c3f5=document.querySelector('#espaldaTercerIntento');
  var 1RMf5=document.querySelector('#espaldaTeorico');
  var fila5[]=[c1f5.value,c2f5.value,c3f5.value];
  if (c3f5.value==0) {
    1RMf5.value=c1f5.value;
  }else {

  }
}
