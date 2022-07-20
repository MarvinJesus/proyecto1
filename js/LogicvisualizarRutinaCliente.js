var botonRutina = document.querySelector('#visualizar');
botonRutina.addEventListener('click', rutinaEjercicios);

var tbodyRutina = document.querySelector('#tblRutinas #ejercicios');

var tbodyRutina1 = document.querySelector('#tabla1 #tbody1');
var tbodyRutina2 = document.querySelector('#tabla2 #tbody2');
var tbodyRutina3 = document.querySelector('#tabla3 #tbody3');
var tbodyRutina4 = document.querySelector('#tabla4 #tbody4');


function rutinaEjercicios() {

  tbody1.innerHTML = '';
  tbody2.innerHTML = '';
  tbody3.innerHTML = '';
  tbody4.innerHTML = '';

  var aEjercicios = ['Press de Banca','Polea al Pecho','Curl Abdominal Declinado','Extensiones','Predicador con Mancuerna'];

  var aPeso1 = ['23','21','32','43','12'];
  var aRepeticiones1 = ['10','10','20','15','10'];
  var aSeries1 = ['3','4','3','5','6'];

  var aPeso2 = ['23','21','32','43','12'];
  var aRepeticiones2 = ['10','10','20','15','10'];
  var aSeries2 = ['3','4','3','5','6'];

  var aPeso3 = ['23','21','32','43','12'];
  var aRepeticiones3 = ['10','10','20','15','10'];
  var aSeries3 = ['3','4','3','5','6'];

  var aPeso4 = ['23','21','32','43','12'];
  var aRepeticiones4 = ['10','10','20','15','10'];
  var aSeries4 = ['3','4','3','5','6'];

  var tamannoArreglo = aEjercicios.length;

  for (var i = 0; i < tamannoArreglo; i++) {

    var fila1 = document.createElement('tr');

    var celdaEjercicios = document.createElement('td');
    var celdaPeso1 = document.createElement('td');
    var celdaRepeticiones1 = document.createElement('td');
    var celdaSeries1 = document.createElement('td');

    var nodoTextoEjercicio = document.createTextNode(aEjercicios[i]);
    var nodoTextoPeso1 = document.createTextNode(aPeso1[i]);
    var nodoTextoRepeticiones1 = document.createTextNode(aRepeticiones1[i]);
    var nodoTextoSeries1 = document.createTextNode(aSeries1[i]);


    celdaEjercicios.appendChild(nodoTextoEjercicio);
    celdaPeso1.appendChild(nodoTextoPeso1);
    celdaRepeticiones1.appendChild(nodoTextoRepeticiones1);
    celdaSeries1.appendChild(nodoTextoSeries1);

    fila1.appendChild(celdaEjercicios);
    fila1.appendChild(celdaPeso1);
    fila1.appendChild(celdaRepeticiones1);
    fila1.appendChild(celdaSeries1);

    tbodyRutina.appendChild(fila1);
    tbodyRutina1.appendChild(fila1);
}

  for (var i = 0; i < tamannoArreglo; i++) {

    var fila1 = document.createElement('tr');

    var celdaEjercicios = document.createElement('td');
    var celdaPeso2 = document.createElement('td');
    var celdaRepeticiones2 = document.createElement('td');
    var celdaSeries2 = document.createElement('td');
    var celdaPeso2 = document.createElement('td');
    var celdaRepeticiones2 = document.createElement('td');
    var celdaSeries2 = document.createElement('td');

    var nodoTextoEjercicio = document.createTextNode(aEjercicios[i]);
    var nodoTextoPeso2 = document.createTextNode(aPeso2[i]);
    var nodoTextoRepeticiones2 = document.createTextNode(aRepeticiones2[i]);
    var nodoTextoSeries2 = document.createTextNode(aSeries2[i]);

    celdaEjercicios.appendChild(nodoTextoEjercicio);
    celdaPeso2.appendChild(nodoTextoPeso2);
    celdaRepeticiones2.appendChild(nodoTextoRepeticiones2);
    celdaSeries2.appendChild(nodoTextoSeries2);

    fila1.appendChild(celdaEjercicios);
    fila1.appendChild(celdaPeso2);
    fila1.appendChild(celdaRepeticiones2);
    fila1.appendChild(celdaSeries2);

    tbodyRutina.appendChild(fila1);
    tbodyRutina2.appendChild(fila1);
  }

  for (var i = 0; i < tamannoArreglo; i++) {

    var fila1 = document.createElement('tr');

    var celdaEjercicios = document.createElement('td');
    var celdaPeso3 = document.createElement('td');
    var celdaRepeticiones3 = document.createElement('td');
    var celdaSeries3 = document.createElement('td');

    var celdaPeso3 = document.createElement('td');
    var celdaRepeticiones3 = document.createElement('td');
    var celdaSeries3 = document.createElement('td');

    var nodoTextoEjercicio = document.createTextNode(aEjercicios[i]);
    var nodoTextoPeso3 = document.createTextNode(aPeso3[i]);
    var nodoTextoRepeticiones3 = document.createTextNode(aRepeticiones3[i]);
    var nodoTextoSeries3 = document.createTextNode(aSeries3[i]);

    celdaEjercicios.appendChild(nodoTextoEjercicio);
    celdaPeso3.appendChild(nodoTextoPeso3);
    celdaRepeticiones3.appendChild(nodoTextoRepeticiones3);
    celdaSeries3.appendChild(nodoTextoSeries3);

    fila1.appendChild(celdaEjercicios);
    fila1.appendChild(celdaPeso3);
    fila1.appendChild(celdaRepeticiones3);
    fila1.appendChild(celdaSeries3);

    tbodyRutina.appendChild(fila1);
    tbodyRutina3.appendChild(fila1);
  }

  for (var i = 0; i < tamannoArreglo; i++) {

    var fila1 = document.createElement('tr');
    var celdaEjercicios = document.createElement('td');
    var celdaPeso4 = document.createElement('td');
    var celdaRepeticiones4 = document.createElement('td');
    var celdaSeries4 = document.createElement('td');

    var celdaPeso4 = document.createElement('td');
    var celdaRepeticiones4 = document.createElement('td');
    var celdaSeries4 = document.createElement('td');

    var nodoTextoEjercicio = document.createTextNode(aEjercicios[i]);
    var nodoTextoPeso4 = document.createTextNode(aPeso4[i]);
    var nodoTextoRepeticiones4 = document.createTextNode(aRepeticiones4[i]);
    var nodoTextoSeries4 = document.createTextNode(aSeries4[i]);

    celdaEjercicios.appendChild(nodoTextoEjercicio);
    celdaPeso4.appendChild(nodoTextoPeso4);
    celdaRepeticiones4.appendChild(nodoTextoRepeticiones4);
    celdaSeries4.appendChild(nodoTextoSeries4);

    fila1.appendChild(celdaEjercicios);
    fila1.appendChild(celdaPeso4);
    fila1.appendChild(celdaRepeticiones4);
    fila1.appendChild(celdaSeries4);

    tbodyRutina.appendChild(fila1);
    tbodyRutina4.appendChild(fila1);
  }
}
