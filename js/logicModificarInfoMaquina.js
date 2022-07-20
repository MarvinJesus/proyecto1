
  var idMaquina =['001','002','003','004','005','006','007','008','009','010','011'];
  var nombreMaquina=['GLUTE','TRICEPS DIP','TRICEPS DIV','TRICEPS EXT','BICEPS CURL','CAMBERL CURL','SEATED ROW','VERTICA ROW','LONG PULLY','INCLINE PRESS','DONKEY CALF'];
  var estadoMaquina=['Buena','Buena','Mal estado','Buena','Buena','Mal estado','Buena','Buena','Mal estado','Buena','Buena'];
  var maquinasIMG=['imgs/GLUTE-001.jpg','imgs/TRICEPS DIP-002.jpg','imgs/TRICEPS DIV-003.jpg','imgs/TRICEPS EXT-004.jpg','imgs/BICEPS CURL-005.jpg','imgs/CAMBERL CURL-006.jpg','imgs/SEATED ROW-007.jpg','imgs/VERTICA ROW-008.jpg','imgs/LONG PULLY-009.jpg','imgs/INCLINE PRESS-010.jpg','imgs/DONKEY CALF-011.jpg']


function crearTblInfoMaquina(pIndice){

 


  var tbody = document.querySelector('#tblEstadisticas tbody');
  var thead = document.querySelector('#tblEstadisticas thead');
    tbody.innerHTML = '';
  fotoVisible=document.getElementById('fortoTabla');






    var fila1= document.createElement('tr');
    var fila2= document.createElement('tr');
    var fila3= document.createElement('tr');
    var fila4= document.createElement('tr');
    var fila5= document.createElement('tr');




    var info= document.createElement('td');
    var tipo= document.createElement('td');
    var  infoImg= document.createElement('td');
    var  img= document.createElement('td');

    var imagen = document.createElement('img');
    imagen.setAttribute("src",maquinasIMG[pIndice]);


    var celdaId= document.createElement('td');
    var celdaNombreMaquina= document.createElement('td');
    var celdaEstadoMaquina= document.createElement('td');


    var celdaInfNumeroDemaquina= document.createElement('input');
     celdaInfNumeroDemaquina.setAttribute("value",idMaquina[pIndice]);
     celdaInfNumeroDemaquina.setAttribute("class","styleinput");
     celdaInfNumeroDemaquina.setAttribute("id","idMaquina");

    var celdaInfNombreDeMaquina= document.createElement('input');
        celdaInfNombreDeMaquina.setAttribute("value",nombreMaquina[pIndice]);
        celdaInfNombreDeMaquina.setAttribute("class","styleinput");
        celdaInfNombreDeMaquina.setAttribute("id","nombreMaquina");

    var celdaInfEstadoMaquina= document.createElement('input');
    celdaInfEstadoMaquina.setAttribute("value",estadoMaquina[pIndice]);
    celdaInfEstadoMaquina.setAttribute("class","styleinput");
    celdaInfEstadoMaquina.setAttribute("id","estadoMaquina");


    var infoImgNodeTxt=document.createTextNode('IMAGEN DE LA MAQUINA');
    var nodoTextoInfo=document.createTextNode('INFORMACION');
    var nodoTextoTipo=document.createTextNode('TIPO');


    var nodoTextoIdsMaquinas=document.createTextNode(idMaquina[pIndice]);
    var nodoTextoNombre=document.createTextNode(nombreMaquina[pIndice]);
    var nodoTextoEstadoMaquina=document.createTextNode(estadoMaquina[pIndice]);

    var celdaInfNumeroDemaquinaTxtNodo=document.createTextNode('ID DE MAQUINA');
    var celdaInfNombreDeMaquinaTxtNodo=document.createTextNode('NOMBRE DE LA MAQUINA');
    var celdaInfEstadoMaquinaTxtNodo=document.createTextNode('ESTADO DE LA MAQUINA');

    infoImg.appendChild(infoImgNodeTxt);


    img.appendChild(imagen);

    celdaInfNumeroDemaquina

    celdaId.appendChild(celdaInfNumeroDemaquinaTxtNodo);
    celdaNombreMaquina.appendChild(celdaInfNombreDeMaquinaTxtNodo);
    celdaEstadoMaquina.appendChild(celdaInfEstadoMaquinaTxtNodo);

    fila5.appendChild(infoImg);
    fila5.appendChild(img);



    fila1.appendChild(celdaId);
    fila2.appendChild(celdaNombreMaquina);
    fila3.appendChild(celdaEstadoMaquina);

    fila1.appendChild(celdaInfNumeroDemaquina);
    fila2.appendChild(celdaInfNombreDeMaquina);
    fila3.appendChild(celdaInfEstadoMaquina);




    thead.appendChild(fila4);
    thead.appendChild(fila4);

    tbody.appendChild(fila1);
    tbody.appendChild(fila2);
    tbody.appendChild(fila3);
    tbody.appendChild(fila5);



  }

document.getElementById('registrar').addEventListener('onclick', function(){

        guardarCambioInformacionmaquina(pIndice);

  });


  function guardarCambioInformacionmaquina(p){

    var indice=document.getElementById("listaMaquinasAModificar").value;


    var idUnaMaquina=document.getElementById("idMaquina").value;

    idMaquina[indice]=idUnaMaquina;


    var nombreUnaMaquina=document.getElementById("nombreMaquina").value;
    nombreMaquina[indice]=nombreUnaMaquina;



    var estadoUnaMaquina=document.getElementById("estadoMaquina").value;
    estadoMaquina[indice]=estadoUnaMaquina;








  }
