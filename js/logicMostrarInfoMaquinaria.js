
  
 

function crearTblInfoMaquina(pIndice){

  var tbody = document.querySelector('#tblInfoMaquinas tbody');
  var thead = document.querySelector('#tblInfoMaquinas thead');
    tbody.innerHTML = '';
    thead.innerHTML = '';


  var idMaquina =['001','002','003','004','005','006','007','008','009','010','011'];
  var nombreMaquina=['GLUTE','TRICEPS DIP','TRICEPS DIV','TRICEPS EXT','BICEPS CURL','CAMBERL CURL','SEATED ROW','VERTICA ROW','LONG PULLY','INCLINE PRESS','DONKEY CALF'];
  var estadoMaquina=['Buena','Buena','Mal estado','Buena','Buena','Mal estado','Buena','Buena','Mal estado','Buena','Buena'];
  var maquinasIMG=['imgs/GLUTE-001.jpg','imgs/TRICEPS DIP-002.jpg','imgs/TRICEPS DIV-003.jpg','imgs/TRICEPS EXT-004.jpg','imgs/BICEPS CURL-005.jpg','imgs/CAMBERL CURL-006.jpg','imgs/SEATED ROW-007.jpg','imgs/VERTICA ROW-008.jpg','imgs/LONG PULLY-009.jpg','imgs/INCLINE PRESS-010.jpg','imgs/DONKEY CALF-011.jpg']

  

   
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


    var celdaInfNumeroDemaquina= document.createElement('td');
    var celdaInfNombreDeMaquina= document.createElement('td');
    var celdaInfEstadoMaquina= document.createElement('td');

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
    tipo.appendChild(nodoTextoTipo);
    info.appendChild(nodoTextoInfo);

    img.appendChild(imagen);

    celdaId.appendChild(nodoTextoIdsMaquinas);
    celdaNombreMaquina.appendChild(nodoTextoNombre);
    celdaEstadoMaquina.appendChild(nodoTextoEstadoMaquina);

    celdaInfNumeroDemaquina.appendChild(celdaInfNumeroDemaquinaTxtNodo);
    celdaInfNombreDeMaquina.appendChild(celdaInfNombreDeMaquinaTxtNodo);
    celdaInfEstadoMaquina.appendChild(celdaInfEstadoMaquinaTxtNodo);

    fila5.appendChild(infoImg);
    fila5.appendChild(img);

    fila4.appendChild(tipo);
    fila4.appendChild(info);

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