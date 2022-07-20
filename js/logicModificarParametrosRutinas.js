var tabla = document.querySelector('#parametrosRutina');

var listaEjerciciosRutina = obtenerEjerciciosRutina();
var parametros = ['10','3','6','11','3','6','12','3','6','13','3','6'];
crearTabla();

var btnAgregarFila = document.querySelector('#btnAgregarFila');
var btnEliminarFila = document.querySelector('.borrar');
btnAgregarFila.addEventListener('click',agregarFila);
btnEliminarFila.addEventListener('click',eliminarFila);

function agregarFila(){

  var numEjercicio = listaEjerciciosRutina.length+1;

  var fila = document.createElement('tr');
  var celdaNom = document.createElement('th');
  var celdaPesoS1 = document.createElement('th');
  var celdaPesoS2 = document.createElement('th');
  var celdaPesoS3 = document.createElement('th');
  var celdaPesoS4 = document.createElement('th');
  var celdaSerieS1 = document.createElement('th');
  var celdaSerieS2 = document.createElement('th');
  var celdaSerieS3 = document.createElement('th');
  var celdaSerieS4 = document.createElement('th');
  var celdaRepS1 = document.createElement('th');
  var celdaRepS2 = document.createElement('th');
  var celdaRepS3 = document.createElement('th');
  var celdaRepS4 = document.createElement('th');
  var celdaBorrar = document.createElement('th');
  fila.id = "ejercicio"+numEjercicio;


  var lista = document.createElement('select');
  var listaNomEjercicios = obtenerNomEjercicios();

  for (var i = 0; i < listaNomEjercicios.length; i++) {
    var nomEjercicio =  document.createTextNode(listaNomEjercicios[i]);
    var option = document.createElement('option');
    option.appendChild(nomEjercicio);
    option.value = listaNomEjercicios[i];
    lista.appendChild(option);
  }

  var pesoS1 = document.createElement("input");
  pesoS1.type = "text";
  pesoS1.value = '0';

  var pesoS2 = document.createElement("input");
  pesoS2.type = "text";
  pesoS2.value = '0';

  var pesoS3 = document.createElement("input");
  pesoS3.type = "text";
  pesoS3.value = '0';

  var pesoS4 = document.createElement("input");
  pesoS4.type = "text";
  pesoS4.value = '0';

  var serieS1 = document.createElement("input");
  serieS1.type = "text";
  serieS1.value = '0';

  var serieS2 = document.createElement("input");
  serieS2.type = "text";
  serieS2.value = '0';

  var serieS3 = document.createElement("input");
  serieS3.type = "text";
  serieS3.value = '0';

  var serieS4 = document.createElement("input");
  serieS4.type = "text";
  serieS4.value = '0';

  var repS1 = document.createElement("input");
  repS1.type = "text";
  repS1.value = '0';

  var repS2 = document.createElement("input");
  repS2.type = "text";
  repS2.value = '0';

  var repS3 = document.createElement("input");
  repS3.type = "text";
  repS3.value = '0';

  var repS4 = document.createElement("input");
  repS4.type = "text";
  repS4.value = '0';

  var btnBorrar = document.createElement("input");
  btnBorrar.type = "button";
  btnBorrar.className = "borrar";
  btnBorrar.id = numEjercicio;

  celdaNom.appendChild(lista);
  celdaPesoS1.appendChild(pesoS1);
  celdaPesoS2.appendChild(pesoS2);
  celdaPesoS3.appendChild(pesoS3);
  celdaPesoS4.appendChild(pesoS4);
  celdaSerieS1.appendChild(serieS1);
  celdaSerieS2.appendChild(serieS2);
  celdaSerieS3.appendChild(serieS3);
  celdaSerieS4.appendChild(serieS4);
  celdaRepS1.appendChild(repS1);
  celdaRepS2.appendChild(repS2);
  celdaRepS3.appendChild(repS3);
  celdaRepS4.appendChild(repS4);
  celdaBorrar.appendChild(btnBorrar);

  fila.appendChild(celdaNom);
  fila.appendChild(celdaPesoS1);
  fila.appendChild(celdaPesoS2);
  fila.appendChild(celdaPesoS3);
  fila.appendChild(celdaPesoS4);
  fila.appendChild(celdaSerieS1);
  fila.appendChild(celdaSerieS2);
  fila.appendChild(celdaSerieS3);
  fila.appendChild(celdaSerieS4);
  fila.appendChild(celdaRepS1);
  fila.appendChild(celdaRepS2);
  fila.appendChild(celdaRepS3);
  fila.appendChild(celdaRepS4);
  fila.appendChild(celdaBorrar);

  tabla.appendChild(fila);
}

function crearTabla(){

  var numRutina = document.querySelector('#numRutina');
  var nodoNomRutina = document.createTextNode('Rutina 1');
  nomRutina.appendChild(nodoNomRutina);

  for (var i = 0;i<listaEjerciciosRutina.length;i++) {
    var fila = document.createElement('tr');
    var celdaNom = document.createElement('th');
    var celdaPesoS1 = document.createElement('th');
    var celdaPesoS2 = document.createElement('th');
    var celdaPesoS3 = document.createElement('th');
    var celdaPesoS4 = document.createElement('th');
    var celdaSerieS1 = document.createElement('th');
    var celdaSerieS2 = document.createElement('th');
    var celdaSerieS3 = document.createElement('th');
    var celdaSerieS4 = document.createElement('th');
    var celdaRepS1 = document.createElement('th');
    var celdaRepS2 = document.createElement('th');
    var celdaRepS3 = document.createElement('th');
    var celdaRepS4 = document.createElement('th');
    var celdaBorrar = document.createElement('th');
    fila.id = "ejercicio"+(i+1);

    var nom = document.createTextNode(listaEjerciciosRutina[i]);

    var pesoS1 = document.createElement("input");
    pesoS1.type = "text";
    pesoS1.value = parametros[0];

    var pesoS2 = document.createElement("input");
    pesoS2.type = "text";
    pesoS2.value = parametros[1];

    var pesoS3 = document.createElement("input");
    pesoS3.type = "text";
    pesoS3.value = parametros[2];

    var pesoS4 = document.createElement("input");
    pesoS4.type = "text";
    pesoS4.value = parametros[3];

    var serieS1 = document.createElement("input");
    serieS1.type = "text";
    serieS1.value = parametros[4];

    var serieS2 = document.createElement("input");
    serieS2.type = "text";
    serieS2.value = parametros[5];

    var serieS3 = document.createElement("input");
    serieS3.type = "text";
    serieS3.value =  parametros[6];

    var serieS4 = document.createElement("input");
    serieS4.type = "text";
    serieS4.value =  parametros[7];

    var repS1 = document.createElement("input");
    repS1.type = "text";
    repS1.value =  parametros[8];

    var repS2 = document.createElement("input");
    repS2.type = "text";
    repS2.value =  parametros[9];

    var repS3 = document.createElement("input");
    repS3.type = "text";
    repS3.value = parametros[10];

    var repS4 = document.createElement("input");
    repS4.type = "text";
    repS4.value = parametros[11];

    var btnBorrar = document.createElement("input");
    btnBorrar.type = "button";
    btnBorrar.className = "borrar";
    btnBorrar.id = (i+1);

    celdaNom.appendChild(nom);
    celdaPesoS1.appendChild(pesoS1);
    celdaPesoS2.appendChild(pesoS2);
    celdaPesoS3.appendChild(pesoS3);
    celdaPesoS4.appendChild(pesoS4);
    celdaSerieS1.appendChild(serieS1);
    celdaSerieS2.appendChild(serieS2);
    celdaSerieS3.appendChild(serieS3);
    celdaSerieS4.appendChild(serieS4);
    celdaRepS1.appendChild(repS1);
    celdaRepS2.appendChild(repS2);
    celdaRepS3.appendChild(repS3);
    celdaRepS4.appendChild(repS4);
    celdaBorrar.appendChild(btnBorrar);

    fila.appendChild(celdaNom);
    fila.appendChild(celdaPesoS1);
    fila.appendChild(celdaPesoS2);
    fila.appendChild(celdaPesoS3);
    fila.appendChild(celdaPesoS4);
    fila.appendChild(celdaSerieS1);
    fila.appendChild(celdaSerieS2);
    fila.appendChild(celdaSerieS3);
    fila.appendChild(celdaSerieS4);
    fila.appendChild(celdaRepS1);
    fila.appendChild(celdaRepS2);
    fila.appendChild(celdaRepS3);
    fila.appendChild(celdaRepS4);
    fila.appendChild(celdaBorrar);

    tabla.appendChild(fila);
  }


}

function eliminarFila(){
  var id = btnEliminarFila.getAttribute('id');
  var tablaEliminar = document.querySelector('#ejercicio'+id);
  tablaEliminar.remove();

}

function obtenerNomEjercicios(){
  var listaNomEjercicios = ['Dips','Flexiones de brazo','Apertura con macuernas','Cruce de pies con polea'];

  return listaNomEjercicios;
}

function obtenerEjerciciosRutina(){
  var listaNomEjercicios = ['Dips','Flexiones de brazo','Apertura con macuernas','Cruce de pies con polea'];

  return listaNomEjercicios;
}
