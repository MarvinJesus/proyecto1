var elementoBoton7 = document.querySelector('#cerrarSesion');

elementoBoton7.addEventListener('click' , regresar);



function crearTblInfoMaquina(pIndice){

  var tbody = document.querySelector('#tblSeccion tbody');
  var thead = document.querySelector('#tblSeccion thead');
    tbody.innerHTML = '';
    thead.innerHTML = '';


  var idMaquina =['17/03/2016','24/03/2016','21/03/2016','16/03/2016'];
  var nombreMaquina=['12:00 PM','1:30PM','10:30 AM','5:00PM','3:00 PM'];
  var estadoMaquina=['Daniel Chaves','Daniel Chaves','Juan Jose Coto','Daniel Chaves','Juan Jose Coto'];




    var fila1= document.createElement('tr');
    var fila2= document.createElement('tr');
    var fila3= document.createElement('tr');
    var fila4= document.createElement('tr');
    var fila5= document.createElement('tr');




    var info= document.createElement('td');
    var tipo= document.createElement('td');
    var  infoImg= document.createElement('td');



    var celdaId= document.createElement('td');
    var celdaNombreMaquina= document.createElement('td');
    var celdaEstadoMaquina= document.createElement('td');


    var celdaInfNumeroDemaquina= document.createElement('td');
    var celdaInfNombreDeMaquina= document.createElement('td');
    var celdaInfEstadoMaquina= document.createElement('td');

    var infoImgNodeTxt=document.createTextNode('IMAGEN DE LA MAQUINA');
    var nodoTextoInfo=document.createTextNode('INFORMACION');
    var nodoTextoTipo=document.createTextNode('TIPO');


    var nodoTextoIdsMaquinas=document.createTextNode(idMaquina[pIndice]);
    var nodoTextoNombre=document.createTextNode(nombreMaquina[pIndice]);
    var nodoTextoEstadoMaquina=document.createTextNode(estadoMaquina[pIndice]);

    var celdaInfNumeroDemaquinaTxtNodo=document.createTextNode('Fecha');
    var celdaInfNombreDeMaquinaTxtNodo=document.createTextNode('Hora');
    var celdaInfEstadoMaquinaTxtNodo=document.createTextNode('Instructor');


    celdaId.appendChild(nodoTextoIdsMaquinas);
    celdaNombreMaquina.appendChild(nodoTextoNombre);
    celdaEstadoMaquina.appendChild(nodoTextoEstadoMaquina);

    celdaInfNumeroDemaquina.appendChild(celdaInfNumeroDemaquinaTxtNodo);
    celdaInfNombreDeMaquina.appendChild(celdaInfNombreDeMaquinaTxtNodo);
    celdaInfEstadoMaquina.appendChild(celdaInfEstadoMaquinaTxtNodo);



    fila1.appendChild(celdaInfNumeroDemaquina);
    fila2.appendChild(celdaInfNombreDeMaquina);
    fila3.appendChild(celdaInfEstadoMaquina);


    fila1.appendChild(celdaId);
    fila2.appendChild(celdaNombreMaquina);
    fila3.appendChild(celdaEstadoMaquina);

    thead.appendChild(fila4);
    thead.appendChild(fila4);

    tbody.appendChild(fila1);
    tbody.appendChild(fila2);
    tbody.appendChild(fila3);
    tbody.appendChild(fila5);
  }
  function regresar() {
    window.history.back();
  }
