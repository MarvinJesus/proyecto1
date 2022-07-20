var btnPecho = document.getElementById('btnPecho');
btnPecho.addEventListener('click',selectPecho,false);

var btnBrazo = document.getElementById('btnBrazo');
btnBrazo.addEventListener('click',selectBrazo,false);

var btnEspalda = document.getElementById('btnEspalda');
btnEspalda.addEventListener('click',selectEspalda,false);

var btnPierna = document.getElementById('btnPierna');
btnPierna.addEventListener('click',selectPierna,false);

var btnAbdomen = document.getElementById('btnAbdomen');
btnAbdomen.addEventListener('click',selectAbdomen,false);




function selectPecho(){
  document.getElementById('Pecho').style.display = 'block';
  document.getElementById('Brazo').style.display = 'none';
  document.getElementById('Espalda').style.display = 'none';
  document.getElementById('Pierna').style.display = 'none';
  document.getElementById('Abdomen').style.display = 'none';

  document.getElementById('ejerciciosPecho').style.display = 'block';
  document.getElementById('flexionesBrazo').style.display = 'none';
  document.getElementById('estiramientoCadenas').style.display = 'none';
  document.getElementById('sentadillas').style.display = 'none';
  document.getElementById('abdominales').style.display = 'none';
}




function selectBrazo(){
  document.getElementById('Pecho').style.display = 'none';
  document.getElementById('Brazo').style.display = 'block';
  document.getElementById('Espalda').style.display = 'none';
  document.getElementById('Pierna').style.display = 'none';
  document.getElementById('Abdomen').style.display = 'none';

  document.getElementById('flexionesBrazo').style.display = 'block';
  document.getElementById('ejerciciosPecho').style.display = 'none';
  document.getElementById('estiramientoCadenas').style.display = 'none';
  document.getElementById('sentadillas').style.display = 'none';
  document.getElementById('abdominales').style.display = 'none';
}




function selectEspalda(){
  document.getElementById('Pecho').style.display = 'none';
  document.getElementById('Brazo').style.display = 'none';
  document.getElementById('Espalda').style.display = 'block';
  document.getElementById('Pierna').style.display = 'none';
  document.getElementById('Abdomen').style.display = 'none';

  document.getElementById('estiramientoCadenas').style.display = 'block';
  document.getElementById('ejerciciosPecho').style.display = 'none';
  document.getElementById('flexionesBrazo').style.display = 'none';
  document.getElementById('sentadillas').style.display = 'none';
  document.getElementById('abdominales').style.display = 'none';
}




function selectPierna(){
  document.getElementById('Pecho').style.display = 'none';
  document.getElementById('Brazo').style.display = 'none';
  document.getElementById('Espalda').style.display = 'none';
  document.getElementById('Pierna').style.display = 'block';
  document.getElementById('Abdomen').style.display = 'none';

  document.getElementById('sentadillas').style.display = 'block';
  document.getElementById('ejerciciosPecho').style.display = 'none';
  document.getElementById('flexionesBrazo').style.display = 'none';
  document.getElementById('estiramientoCadenas').style.display = 'none';
  document.getElementById('abdominales').style.display = 'none';
}




function selectAbdomen(){
  document.getElementById('Pecho').style.display = 'none';
  document.getElementById('Brazo').style.display = 'none';
  document.getElementById('Espalda').style.display = 'none';
  document.getElementById('Pierna').style.display = 'none';
  document.getElementById('Abdomen').style.display = 'block';

  document.getElementById('abdominales').style.display = 'block';
  document.getElementById('sentadillas').style.display = 'none';
  document.getElementById('ejerciciosPecho').style.display = 'none';
  document.getElementById('flexionesBrazo').style.display = 'none';
  document.getElementById('estiramientoCadenas').style.display = 'none';
}




function ejercicioMostrarOcultarPecho(id) {

    if (id == "flexionesPecho") {
        document.getElementById('ejerciciosPecho').style.display = 'block';
        $("#aperturas").hide();
        $("#flexionesPecho").show();
      }

    if (id == "aperturas") {
        document.getElementById('ejerciciosPecho').style.display = 'block';
        $("#aperturas").show();
        $("#flexionesPecho").hide();
    }
}




function ejercicioMostrarOcultarBrazo(id){

  if (id == "flexionesBrazo") {
      document.getElementById('ejerciciosBrazo').style.display = 'block';
      $("#flexionesBrazo").show();
      $("#levantamientoPesas").hide();
  }

  if (id == "levantamientoPesas") {
      document.getElementById('ejerciciosBrazo').style.display = 'block';
      $("#flexionesBrazo").hide();
      $("#levantamientoPesas").show();
  }
}




function ejercicioMostrarOcultarEspalda(id){

  if (id == "estiramientoCadenas") {
      document.getElementById('ejerciciosEspalda').style.display = 'block';
      $("#estiramientoCadenas").show();
      $("#alargamientoColumna").hide();
  }

  if (id == "alargamientoColumna") {
      document.getElementById('ejerciciosEspalda').style.display = 'block';
      $("#estiramientoCadenas").hide();
      $("#alargamientoColumna").show();
  }
}




function ejercicioMostrarOcultarPierna(id){

  if (id == "sentadillas") {
      document.getElementById('ejerciciosPierna').style.display = 'block';
      $("#sentadillas").show();
      $("#carro").hide();
  }

  if (id == "carro") {
      document.getElementById('ejerciciosPierna').style.display = 'block';
      $("#sentadillas").hide();
      $("#carro").show();
  }
}




function ejercicioMostrarOcultarAbdomen(id){

  if (id == "abdominales") {
      document.getElementById('ejerciciosAbdomen').style.display = 'block';
      $("#abdominales").show();
      $("#elevacionPiernas").hide();
  }

  if (id == "elevacionPiernas") {
      document.getElementById('ejerciciosAbdomen').style.display = 'block';
      $("#abdominales").hide();
      $("#elevacionPiernas").show();
  }
}



function ocultar(id){
  document.getElementById(id).style.display = 'none';
}



function modificarEjercicios(){

  var ejer1 = document.getElementById('nombreEjercicio1');
  var ejercicio1 = ejer1.innerHTML;

  var ejer2 = document.getElementById('nombreEjercicio2');
  var ejercicio2 = ejer2.innerHTML;

  var ejer3 = document.getElementById('nombreEjercicio3');
  var ejercicio3 = ejer3.innerHTML;

  var ejer4 = document.getElementById('nombreEjercicio4');
  var ejercicio4 = ejer4.innerHTML;

  var ejer5 = document.getElementById('nombreEjercicio5');
  var ejercicio5 = ejer5.innerHTML;

  var ejer6 = document.getElementById('nombreEjercicio6');
  var ejercicio6 = ejer6.innerHTML;

  var ejer7 = document.getElementById('nombreEjercicio7');
  var ejercicio7 = ejer7.innerHTML;

  var ejer8 = document.getElementById('nombreEjercicio8');
  var ejercicio8 = ejer8.innerHTML;

  var ejer9 = document.getElementById('nombreEjercicio9');
  var ejercicio9 = ejer9.innerHTML;

  var ejer10 = document.getElementById('nombreEjercicio10');
  var ejercicio10 = ejer10.innerHTML;


  nombreEjercicio = document.getElementById("txtNombreEjercicio").value;
  nuevoNombreEjercicio = document.getElementById("txtNuevoNombreEjercicio").value;
  posicionInicial = document.getElementById("txtPosicionInicial").value;
  posicionFinal = document.getElementById("txtPosicionFinal").value;
  erroresComunes = document.getElementById("txtErroresComunes").value;
  lineamientos = document.getElementById("txtLineamientos").value;

  if (nombreEjercicio == ejercicio1) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio1").text(nuevoNombreEjercicio);
           $("#posicionInicial1").text(posicionInicial);
           $("#posicionFinal1").text(posicionFinal);
           $("#erroresComunes1").text(erroresComunes);
           $("#lineamientosGenerales1").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio2) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio2").text(nuevoNombreEjercicio);
           $("#posicionInicial2").text(posicionInicial);
           $("#posicionFinal2").text(posicionFinal);
           $("#erroresComunes2").text(erroresComunes);
           $("#lineamientosGenerales2").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio3) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio3").text(nuevoNombreEjercicio);
           $("#posicionInicial3").text(posicionInicial);
           $("#posicionFinal3").text(posicionFinal);
           $("#erroresComunes3").text(erroresComunes);
           $("#lineamientosGenerales3").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio4) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio4").text(nuevoNombreEjercicio);
           $("#posicionInicial4").text(posicionInicial);
           $("#posicionFinal4").text(posicionFi5al);
           $("#erroresComunes4").text(erroresComunes);
           $("#lineamientosGenerales4").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio5) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio5").text(nuevoNombreEjercicio);
           $("#posicionInicial5").text(posicionInicial);
           $("#posicionFinal5").text(posicionFinal);
           $("#erroresComunes5").text(erroresComunes);
           $("#lineamientosGenerales5").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio6) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio6").text(nuevoNombreEjercicio);
           $("#posicionInicial6").text(posicionInicial);
           $("#posicionFinal6").text(posicionFinal);
           $("#erroresComunes6").text(erroresComunes);
           $("#lineamientosGenerales6").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio7) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio7").text(nuevoNombreEjercicio);
           $("#posicionInicial7").text(posicionInicial);
           $("#posicionFinal7").text(posicionFinal);
           $("#erroresComunes7").text(erroresComunes);
           $("#lineamientosGenerales7").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio8) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio8").text(nuevoNombreEjercicio);
           $("#posicionInicial8").text(posicionInicial);
           $("#posicionFinal8").text(posicionFinal);
           $("#erroresComunes8").text(erroresComunes);
           $("#lineamientosGenerales8").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio9) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio9").text(nuevoNombreEjercicio);
           $("#posicionInicial9").text(posicionInicial);
           $("#posicionFinal9").text(posicionFinal);
           $("#erroresComunes9").text(erroresComunes);
           $("#lineamientosGenerales9").text(lineamientos);
	        });
        });

  }else if (nombreEjercicio == ejercicio10) {
    $(document).ready(function(){
	     $("#btnModificarEjercicios").click(function(){
		       $("#nombreEjercicio10").text(nuevoNombreEjercicio);
           $("#posicionInicial10").text(posicionInicial);
           $("#posicionFinal10").text(posicionFinal);
           $("#erroresComunes10").text(erroresComunes);
           $("#lineamientosGenerales10").text(lineamientos);
	        });
        });
  }
}
