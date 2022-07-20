/*Inicio: validacion existencia de usuario*/
var btnGuardar = document.querySelector('#btnGuardar');
var nombre = localStorage.getItem("NombreUsuario");


function validarUsuario(){
  if (localStorage.getItem("nombreUsuario") === null) {
    alert(error)
  }
}
/*Fin: validacion existencia de usuario*/




/*Inicio: Validacion de campos*/
var elementoBotonIngresar = document.querySelector('#btnGuardar');
elementoBotonIngresar.addEventListener('click',validar); //si se le da click al boton, se llama a la funcion validar

function validar(){
  var aElementosInput = document.querySelectorAll('input[type=text]');
  var cuentaErrores=0;
  var divError = document.querySelector('#divError');
  for(var i = 0; i < aElementosInput.length; i++){
    if(aElementosInput[i].value == ''){
      aElementosInput[i].classList.add('error');
      cuentaErrores ++;
    }else{
      aElementosInput[i].classList.remove('error');
    }
    }
    if(cuentaErrores != 0){
      divError.classList.remove('ocultar');
    }else{
      divError.classList.add('ocultar')
    }
}
/*Fin: validacion de campos*/




/*Inicio: calcular imc*/
function calcularIMC(){
  peso = document.getElementById("txtPeso").value;
  altura = document.getElementById("txtAltura").value;
  var imc = peso/(altura*altura);
  localStorage.setItem("IMC", imc);
}
/*Fin: calcular imc*/




/*Inicio: clasificacion imc*/
function clasificarImc(){
  var clasificacionImc;

  if(imc>16){
    clasificacionImc = "Delgadez severa";
  }else if (imc <= 16 || imc  >=16.99) {
    clasificacionImc = "Delgadez moderada";
  }else if (imc <= 17 || imc >= 18.49) {
    clasificacionImc = "Delgadez leve";
  }else if (imc <= 18.5 || imc >= 24.99) {
    clasificacionImc = "Normal";
  }else if (imc == 25) {
    clasificacionImc = "Sobrepeso";
  }else if (imc < 25 || imc >= 29.99) {
    clasificacionImc = "Preobesidad";
  }else if (imc <= 30 || imc >= 34.99) {
    clasificacionImc = "Obesidad leve";
  }else if (imc <= 35 || imc >= 39.99) {
    clasificacionImc = "Obesidad media";
  }else if (imc <= 40) {
    clasificacionImc = "Obesidad Mórbida",
  }
  localStorage.setItem("Clasificacion IMC", clasificacionImc);
}
/*Fin: clasificacion imc*/




/*Inicio: Calcular peso graso*/
function calcularPesoGraso(){
  var pesoGraso;
  porcentajeGrasa = document.getElementById("txtPorcentajeGrasa").value;
  peso = document.getElementById("txtPeso").value;

  pesoGraso = (peso * porcentajeGrasa)/100;

  localStorage.setItem("Peso graso", pesoGraso);
}
/*Fin: Calcular peso graso*/




function calcularPesoMagro(){
  var pesoMagro;
  pesoTotal = document.getElementById("txtPeso").value;
  pesoMagro = pesoTotal - pesoGraso;

  localStorage.setItem("Peso magro", pesoMagro);
}




function calcularGrasaSubCutanea(){
  var sexo = localStorage.getItem("Sexo"); //DE NO LLAMARSE SEXO, CORREGIRLO
  var grasaSubCutanea,sumatoriaPliegues;

  var tricepsIzq = document.getElementById("txtIzqTriceps").value;
  var tricepsDer = document.getElementById("txtDerTriceps").value;
  var pantorrillasIzq = document.getElementById("txtIzqPantorrillas").value;
  var pantorrillasDer = document.getElementById("txtDerPantorrillas").value;
  var abdominalIzq = document.getElementById("txtIzqAbdominal").value;
  var abdominalDer = document.getElementById("txtDerAbdominal").value;
  var subescapularIzq = document.getElementById("txtIzqSubescapular").value;
  var subescapularDer = document.getElementById("txtDerSubescapular").value;
  var bicepsIzq = document.getElementById("txtIzqBiceps").value;
  var bicepsDer = document.getElementById("txtDerBiceps").value;
  var subEspinalIzq = document.getElementById("txtIzqSubEspinal").value;
  var subEspinalDer = document.getElementById("txtDerSubEspinal").value;
  var musloIzq = document.getElementById("txtIzqMuslo").value;
  var musloDer = document.getElementById("txtDerMuslo").value;

  sumatoriaPliegues = tricepsIzq + tricepsDer + pantorrillasIzq + pantorrillasDer + abdominalIzq + abdominalDer + subescapularIzq + subescapularDer + bicepsIzq + bicepsDer + subEspinalIzq + subEspinalDer + musloIzq + musloDer;

  if (sexo == "Masculino") {
    grasaSubCutanea = 0.1051 * sumatoriaPliegues + 2.585;
  }else {
    grasaSubCutanea = 0.1051 * sumatoria de pliegues cutáneos +  3.580;
  }
  localStorage.setItem("Grasa subCutánea", grasaSubCutanea);
}



/*Inicio: Obtener fecha en la que se realiza el registro*/
function obtenerFecha(){
  var f = new Date();
  var fecha = new Date();
  fecha=(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
  localStorage.setItem("Fecha",fecha)
}
/*Fin: Obtener fecha en la que se realiza el registro*/




/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
  $(document).ready(function(){
    $('#btnGuardar').click(function(){
      /*Captura de datos escrito en los inputs*/
      var nombreUsuario = document.getElementById("txtUsuario").value;
      var espalda = document.getElementById("txtEspalda").value;
      var pecho = document.getElementById("txtPecho").value;
      var cintura = document.getElementById("txtCintura").value;
      var cadera = document.getElementById("txtCadera").value;
      var bicepsIzq = document.getElementById("txtIzqBiceps").value;
      var bicepsDer = document.getElementById("txtDerBiceps").value;
      var musloIzq = document.getElementById("txtIzqMuslo").value;
      var musloDer = document.getElementById("txtDerMuslo").value;
      var pantorrillasIzq = document.getElementById("txtIzqPantorrillas").value;
      var pantorrillasDer = document.getElementById("txtDerPantorrillas").value;
      var tricepsIzq = document.getElementById("txtIzqTriceps").value;
      var tricepsDer = document.getElementById("txtDerTriceps").value;
      var subescapularIzq = document.getElementById("txtIzqSubescapular").value;
      var subescapularDer = document.getElementById("txtDerSubescapular").value;
      var subEspinalIzq = document.getElementById("txtIzqSubEspinal").value;
      var subEspinalDer = document.getElementById("txtDerSubEspinal").value;
      var abdominalIzq = document.getElementById("txtIzqAbdominal").value;
      var abdominalDer = document.getElementById("txtDerAbdominal").value;
      var musloIzq = document.getElementById("txtIzqMuslo").value;
      var musloDer = document.getElementById("txtDerMuslo").value;
      var peso = document.getElementById("txtPeso").value;
      var altura = document.getElementById("txtAltura").value;
      var porcentajeGrasa = document.getElementById("txtPorcentajeGrasa").value;
      /*Guardando los datos en el LocalStorage*/
      localStorage.setItem("NombreUsuario", nombreUsuario);
      localStorage.setItem("Espalda", espalda);
      localStorage.setItem("Pecho", pecho);
      localStorage.setItem("Cintura", cintura);
      localStorage.setItem("Cadera", cadera);
      localStorage.setItem("Biceps Izquierdos", bicepsIzq);
      localStorage.setItem("Biceps Derechos", bicepsDer);
      localStorage.setItem("Muslo Izquierdo", musloIzq);
      localStorage.setItem("Muslo Derecho", musloDer);
      localStorage.setItem("Pantorrillas Izquierdas", pantorrillasIzq);
      localStorage.setItem("Pantorrillas Derechas", pantorrillasDer);
      localStorage.setItem("Triceps Izquierdos", tricepsIzq);
      localStorage.setItem("Triceps Derechos", tricepsDer);
      localStorage.setItem("Subescapular Izquierdo", subescapularIzq);
      localStorage.setItem("Subescapular Derecho", subescapularDer);
      localStorage.setItem("Sub Espinal Izquierdo", subEspinalIzq);
      localStorage.setItem("Sub Espinal Derecho", subEspinalDer);
      localStorage.setItem("Abdominal Izquierdo", abdominalIzq);
      localStorage.setItem("Abdominal Derecho", abdominalDer);
      localStorage.setItem("Muslo Izquierdo", musloIzq);
      localStorage.setItem("Muslo Derecho", musloDer);
      localStorage.setItem("Peso", peso);
      localStorage.setItem("Altura", altura);
      localStorage.setItem("Porcentaje grasa", porcentajeGrasa);
      /*Limpiando los campos o inputs*/
      document.getElementById("txtUsuario").value= "";
      document.getElementById("txtEspalda").value= "";
      document.getElementById("txtPecho").value= "";
      document.getElementById("txtCintura").value= "";
      document.getElementById("txtCadera").value= "";
      document.getElementById("txtIzqBiceps").value= "";
      document.getElementById("txtDerBiceps").value= "";
      document.getElementById("txtIzqMuslo").value= "";
      document.getElementById("txtDerMuslo").value= "";
      document.getElementById("txtIzqPantorrillas").value= "";
      document.getElementById("txtDerPantorrillas").value= "";
      document.getElementById("txtIzqTriceps").value= "";
      document.getElementById("txtDerTriceps").value= "";
      document.getElementById("txtIzqSubescapular").value= "";
      document.getElementById("txtDerSubescapular").value= "";
      document.getElementById("txtIzqSubEspinal").value= "";
      document.getElementById("txtDerSubEspinal").value= "";
      document.getElementById("txtIzqAbdominal").value= "";
      document.getElementById("txtDerAbdominal").value;
      document.getElementById("txtIzqMuslo").value= "";
      document.getElementById("txtDerMuslo").value= "";
      document.getElementById("txtPeso").value= "";
      document.getElementById("txtAltura").value= "";
      document.getElementById("txtPorcentajeGrasa").value= "";
      });
    });


    /*Funcion Cargar y Mostrar datos*/
    $(document).ready(function(){
      $('#btnGuardar').click(function(){
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("NombreUsuario");
        var espalda = localStorage.getItem("Espalda");
        var pecho = localStorage.getItem("Pecho");
        var cintura = localStorage.getItem("Cintura");
        var cadera = localStorage.getItem("Cadera");
        var bicepsIzq = localStorage.getItem("Biceps Izquierdos");
        var bicepsDer = localStorage.getItem("Biceps Derechos");
        var musloIzq = localStorage.getItem("Muslo Izquierdo");
        var musloDer = localStorage.getItem("Muslo Derechos");
        var pantorrillasIzq = localStorage.getItem("Pantorrillas Izquierdas");
        var pantorrillasDer = localStorage.getItem("Pantorrillas Derechas");
        var tricepsIzq = localStorage.getItem("Triceps Izquierdos");
        var tricepsDer = localStorage.getItem("Triceps Derechos");
        var subescapularIzq = localStorage.getItem("Subescapular Izquierdo");
        var subescapularDer = localStorage.getItem("Subescapular Derecho");
        var subEspinalIzq = localStorage.getItem("Sub Espinal Izquierdo");
        var subEspinalDer = localStorage.getItem("Sub Espinal Derecho");
        var abdominalIzq = localStorage.getItem("Abdominal Izquierdo");
        var abdominalDer = localStorage.getItem("Abdominal Derecho");
        var musloIzq = localStorage.getItem("Muslo Izquierdo");
        var musloDer = localStorage.getItem("Muslo Derecho");
        var peso = localStorage.getItem("Peso");
        var altura = localStorage.getItem("Altura");
        var imc = localStorage.getItem("IMC");
        var clasificacionImc = localStorage.getItem("Clasificacion IMC");
        var porcGrasa = localStorage.getItem("Porcentaje grasa");
        var pesoGras = localStorage.getItem("Peso graso");
        var pesoMagr = localStorage.getItem("Peso magro");
        var grasaSubcutan = localStorage.getItem("Grasa subCutánea");
        var date = localStorage.getItem("Fecha");
      });
    });
