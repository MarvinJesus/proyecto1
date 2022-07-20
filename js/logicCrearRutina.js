function generarRutinas(){
  var espalda=['Polea Tras-Nuca','Polea al Pecho','Remo en Maquina','Remo Inclinado con Barra','Barra al Mentón',' Remo en Polea','Dominadas','Encogimiento de hombros','Remo horizontal','Remo en barra con una mano'];
	var pecho=['Press de Banca','Press en Banca Inclinada','Press en Banca Declinada','Aperturas Planas','Pectoral Contractor','Lagartijas','Pullover','Press de Banca Plana con Mancuernas'];
	var brazo=['Predicador con Barra','Curl concentracion con mancuerna','Curl en Martillo','Curl con Barra','Predicador con Mancuerna','Press de banca con agarre cerrado','Extensiones con apoyo','Crossface','Patadas traseras','Jalones en Polea','Jalones en Polea Invertido'];
	var muslo=['Estira en aspa I','Estira en aspa II','Cruce de tobillos I','Cruce de tobillos II','Flexiona y eleva I','Flexiona y eleva II','Rodilla doblada I','Rodilla doblada II','Sentadillas','flexiones de piernas']
	var abdomen=['Curl Abdominal','Curl Abdominal Declinado','Curl Abdominal Declinado con Desaceleracion','Flexion de Piernas en Banca','Elevacion de piernas','Laterales con mancuernas'];
  var pantorrilla=['Elevación de Pantorrilla Sentado','Elevación de Pantorrilla de pie','Levantamiento de pantorrilla en prensa','Elevación de Pantorrilla Burro','Elevación de talón','Desplantes laterales','squat']
  var ejerciciosGenerados = [];


  for (var i = 0; i < 1; i++){
		ejerciciosGenerados = espalda[Math.floor(Math.random() * espalda.length)];
		//document.write("",ejerciciosGenerados,"","<br>");    PRUEBA PARA VER SI OBTIENE VALORES
	};

	for (var i = 1; i < 2; i++) {
		ejerciciosGenerados = pecho[Math.floor(Math.random() * pecho.length)];
		//document.write("",ejerciciosGenerados,"","<br>");    PRUEBA PARA VER SI OBTIENE VALORES
	};

	for (var i = 2; i < 3; i++) {
		ejerciciosGenerados = brazo[Math.floor(Math.random() * brazo.length)];
		//document.write("",ejerciciosGenerados,"","<br>");    PRUEBA PARA VER SI OBTIENE VALORES
	};

	for (var i = 3; i < 4; i++) {
		ejerciciosGenerados = muslo[Math.floor(Math.random() * muslo.length)];
		//document.write("",ejerciciosGenerados,"","<br>");    PRUEBA PARA VER SI OBTIENE VALORES
	};

	for (var i = 4; i < 5; i++) {
		ejerciciosGenerados = abdomen[Math.floor(Math.random() * abdomen.length)];
		//document.write("",ejerciciosGenerados,"","<br>");    PRUEBA PARA VER SI OBTIENE VALORES
	};

  for (var i = 5; i < 6; i++) {
		ejerciciosGenerados = pantorrilla[Math.floor(Math.random() * pantorrilla.length)];
		//document.write("",ejerciciosGenerados,"","<br>");    PRUEBA PARA VER SI OBTIENE VALORES
	};

  localStorage['ejerciciosGenerados']=JSON.stringify(ejerciciosGenerados);

  var ejerciciosGuardados=JSON.parse(localStorage['ejerciciosGenerados']);

};




function validarObjetivo(){

  var aObjetivo = ['Acondicionamiento fisico','Hipertrofia','Potencia','Resistencia','Fuerza'];
  var objetivo,intensidad,series,repeticiones;

  var rm1 = localStorage.getItem("calcular");  //REVISAR*
  var intensidadRm1;


  objetivo = aObjetivo[Math.floor(Math.random() * aObjetivo.length)];

  switch (objetivo) {
    case "Acondicionamiento fisico":

      //intensidad = "50-70%";
      //En el calculo de intensidadRm1 va el rm1 pero por el momento se va a quemar el dato
      intensidadRm1 = 100 * 22 / 55;
      series = "3-5";
      repeticiones = "8-15";
      break;

    case "Hipertrofia":

      //intensidad = "60-80%";
      //En el calculo de intensidadRm1 va el rm1 pero por el momento se va a quemar el dato
      intensidadRm1 = 100 * 34 / 65;
      series = "3-5";
      repeticiones = "6-12";
      break;

    case "Potencia":

      //intensidad = "50-80%";
      //En el calculo de intensidadRm1 va el rm1 pero por el momento se va a quemar el dato
      intensidadRm1 = 100 * 35 / 55;
      series = "3-5";
      repeticiones = "10-20";
      break;

    case "Resistencia":

      //intensidad = "33%"
      //En el calculo de intensidadRm1 va el rm1 pero por el momento se va a quemar el dato
      intensidadRm1 = 100 * 28 / 33;
      series = "3-5";
      repeticiones = "30-50";
      break;

    case "Fuerza":

      //intensidad = "80-100%";
      //En el calculo de intensidadRm1 va el rm1 pero por el momento se va a quemar el dato
      intensidadRm1 = 100 * 29 / 85;
      series = "3-5";
      repeticiones = "1-5";
      break;

  }
  //document.write(intensidadRm1,"<br>");     PRUEBA PARA VER SI OBTIENE VALORES
  //document.write(intensidadRm2,"<br>");     PRUEBA PARA VER SI OBTIENE VALORES
  //document.write(series,"<br>");            PRUEBA PARA VER SI OBTIENE VALORES
  //document.write(repeticiones,"<br>");      PRUEBA PARA VER SI OBTIENE VALORES
}


/*Normales*/
/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
  $(document).ready(function(){
    $('#btnGenerar').click(function(){
      /*Guardando los datos en el LocalStorage*/
      localStorage.setItem("IntensidadRm1", intensidadRm1);
      localStorage.setItem("IntensidadRm2", intensidadRm2);
      localStorage.setItem("Series", series);
      localStorage.setItem("Repeticiones", repeticiones);
    });
  });
  /*Funcion Cargar y Mostrar datos*/
  $(document).ready(function(){
    $('#btnGenerar').click(function(){
      /*Obtener datos almacenados*/
      var intensidRm1 = localStorage.getItem("IntensidadRm1");
      var intensidRm2 = localStorage.getItem("IntensidadRm2");
      var seriesO = localStorage.getItem("Series");
      var repeticionesO = localStorage.getItem("Repeticiones");
    });
  });

  /*function mostrar(id){
    document.getElementById(id).style.display = 'block';
  }

  function ocultar(id){
    document.getElementById(id).style.display = 'none';
  }*/

  function validarRutina(){

    var nombre = localStorage.getItem('nombre');               //CAMBIAR A USUARIO
    var nombreInput = document.getElementById("txtIdCliente").value;

    var divAprobada = document.querySelector('#divAprobada');
    var divError = document.querySelector('#divError');

    if(nombre == nombreInput){
      divAprobada.classList.remove('ocultar');
      divError.classList.add('ocultar1');
    }else{
      divError.classList.remove('ocultar1');
      divAprobada.classList.add('ocultar');
    }
  }




//VER RUTINA CREADA




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
