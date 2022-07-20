localStorage.setItem('genero', "Masculino");
localStorage.setItem('peso',80);
localStorage.setItem('altura',1.80);
localStorage.setItem('altura',1.80);

localStorage.setItem('pCTricepDerrecho',48);
localStorage.setItem('pCTricepIzquierdo',48);
localStorage.setItem('pCSupraspinasDerecho',48);
localStorage.setItem('pCSupraspinasIzquierdo',48);
localStorage.setItem('pCPantorrillaIzquierdo',48);
localStorage.setItem('pCPantorrillaDerecho',48);
localStorage.setItem('pCAbdominalDerecho',48);
localStorage.setItem('pCAbdominalIzquierdo',48);
localStorage.setItem('pCSubescapularDerecho',48);
localStorage.setItem('pCSubescapularIzquierdo',48);
localStorage.setItem('porcentajeGrasa',10);



var cedula=document.getElementById('barraBusqueda');
var btnBuscar=document.querySelector('#btnBuscar');
var tblEstadisticas=document.querySelector('#tblSeccion');

btnBuscar.addEventListener('click',crearTabla);
function regresar(){
  window.history.back();  
}
function crearTablaVacia(){

}
function crearTabla(){
  tblEstadisticas.innerHTML="";
  localStorage.setItem('genero', "Masculino");
  localStorage.setItem('peso',64);
  localStorage.setItem('altura',1.84);
  localStorage.setItem('pCTricepDerrecho',24);
  localStorage.setItem('pCTricepIzquierdo',23);
  localStorage.setItem('pCSupraspinasDerecho',23);
  localStorage.setItem('pCSupraspinasIzquierdo',18);
  localStorage.setItem('pCPantorrillaIzquierdo',17);
  localStorage.setItem('pCPantorrillaDerecho',18);
  localStorage.setItem('pCAbdominalDerecho',40);
  localStorage.setItem('pCAbdominalIzquierdo',42);
  localStorage.setItem('pCSubescapularDerecho',48);
  localStorage.setItem('pCSubescapularIzquierdo',48);
  if(cedula.value=="115130704"){
    var listaEstadisticas=['Peso','Altura','Clasificación','Peso Graso','Peso Magro','Grasa SubCutánea','IMC']
    var listaResultados=[localStorage.getItem('peso'),localStorage.getItem('altura'),clasificar(),localStorage.getItem('peso_graso'),calcularMagro(),calcularGrasaSub(),calcularIMC()];
    for (var i=0;i<listaEstadisticas.length;i++){
      var fila= document.createElement('tr');
      var celdaNombre= document.createElement('td');
      var celdaTotal= document.createElement('td');
      var nodoTextoNombre=document.createTextNode(listaEstadisticas[i]);
      var nodoTextoTotal=document.createTextNode(listaResultados[i]);
      celdaNombre.appendChild(nodoTextoNombre);
      celdaTotal.appendChild(nodoTextoTotal);
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaTotal);
      tblEstadisticas.appendChild(fila);
  }
}
  else if(cedula.value=="116020118"){
    localStorage.setItem('peso',70);
    localStorage.setItem('altura',1.64);
    localStorage.setItem('pCTricepDerrecho',24);
    localStorage.setItem('pCTricepIzquierdo',23);
    localStorage.setItem('pCSupraspinasDerecho',26);
    localStorage.setItem('pCSupraspinasIzquierdo',28);
    localStorage.setItem('pCPantorrillaIzquierdo',17);
    localStorage.setItem('pCPantorrillaDerecho',18);
    localStorage.setItem('pCAbdominalDerecho',67);
    localStorage.setItem('pCAbdominalIzquierdo',65);
    localStorage.setItem('pCSubescapularDerecho',48);
    localStorage.setItem('pCSubescapularIzquierdo',48);
    var listaEstadisticas=['Peso','Altura','Clasificación','Peso Graso','Peso Magro','Grasa SubCutánea','IMC']
    var listaResultados=[localStorage.getItem('peso'),localStorage.getItem('altura'),clasificar(),localStorage.getItem('peso_graso'),calcularMagro(),calcularGrasaSub(),calcularIMC()];
    for (var i=0;i<listaEstadisticas.length;i++){
      var fila= document.createElement('tr');
      var celdaNombre= document.createElement('td');
      var celdaTotal= document.createElement('td');
      var nodoTextoNombre=document.createTextNode(listaEstadisticas[i]);
      var nodoTextoTotal=document.createTextNode(listaResultados[i]);
      celdaNombre.appendChild(nodoTextoNombre);
      celdaTotal.appendChild(nodoTextoTotal);
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaTotal);

      tblEstadisticas.appendChild(fila);

  }
}
  else if(cedula.value=="603860077"){
    localStorage.setItem('peso',97);
    localStorage.setItem('altura',1.94);
    localStorage.setItem('pCTricepDerrecho',18);
    localStorage.setItem('pCTricepIzquierdo',19);
    localStorage.setItem('pCSupraspinasDerecho',26);
    localStorage.setItem('pCSupraspinasIzquierdo',28);
    localStorage.setItem('pCPantorrillaIzquierdo',17);
    localStorage.setItem('pCPantorrillaDerecho',18);
    localStorage.setItem('pCAbdominalDerecho',67);
    localStorage.setItem('pCAbdominalIzquierdo',65);
    localStorage.setItem('pCSubescapularDerecho',76);
    localStorage.setItem('pCSubescapularIzquierdo',77);
    var listaEstadisticas=['Peso','Altura','Clasificación','Peso Graso','Peso Magro','Grasa SubCutánea','IMC']
    var listaResultados=[localStorage.getItem('peso'),localStorage.getItem('altura'),clasificar(),localStorage.getItem('peso_graso'),calcularMagro(),calcularGrasaSub(),calcularIMC()];
    for (var i=0;i<listaEstadisticas.length;i++){
      var fila= document.createElement('tr');
      var celdaNombre= document.createElement('td');
      var celdaTotal= document.createElement('td');
      var nodoTextoNombre=document.createTextNode(listaEstadisticas[i]);
      var nodoTextoTotal=document.createTextNode(listaResultados[i]);
      celdaNombre.appendChild(nodoTextoNombre);
      celdaTotal.appendChild(nodoTextoTotal);
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaTotal);

      tblEstadisticas.appendChild(fila);

  }
}
  else if(cedula.value=="207790136"){
    var listaEstadisticas=['Peso','Altura','Clasificación','Peso Graso','Peso Magro','Grasa SubCutánea','IMC']
    var listaResultados=[localStorage.getItem('peso'),localStorage.getItem('altura'),clasificar(),localStorage.getItem('peso_graso'),calcularMagro(),calcularGrasaSub(),calcularIMC()];
    for (var i=0;i<listaEstadisticas.length;i++){
      var fila= document.createElement('tr');
      var celdaNombre= document.createElement('td');
      var celdaTotal= document.createElement('td');
      var nodoTextoNombre=document.createTextNode(listaEstadisticas[i]);
      var nodoTextoTotal=document.createTextNode(listaResultados[i]);
      celdaNombre.appendChild(nodoTextoNombre);
      celdaTotal.appendChild(nodoTextoTotal);
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaTotal);

      tblEstadisticas.appendChild(fila);
    }


  }
  else{
    alert("No se encontró a usuario con esa cédula");
  }
}
  function sumaPC(){
    //PC = pliegue Cutaneo


    var totalPC=elementoPCTricepDerrecho+elementoPCTricepIzquierdo+elementoPCSupraspinasDerecho+elementoPCSupraspinasIzquierdo+elementoPCPantorrillaIzquierdo+elementoPCPantorrillaDerecho+elementoPCAbdominalDerecho+elementoPCAbdominalIzquierdo+elementoPCSubescapularDerecho+elementoPCSubescapularIzquierdo;
    return totalPC;
  }


function calcularIMC(){
  var elementoPeso=Number(localStorage.getItem('peso'));
  var elementoAltura=Number(localStorage.getItem('altura'));
  var imc=elementoPeso/(elementoAltura*elementoAltura);
  return imc;
}
function clasificar(){
  var imc=calcularIMC();
  var sobreclasificacion="";
  var clasificacion="";
  if(imc<16){
    SobreClasificacion="Delgadez";
    clasificacion="Severa";
  }
  else if(imc>16 && imc<16.99){
    SobreClasificacion="Delgadez";
    clasificacion="Moderada";
  }
  else if(imc>17 && imc<18.49){
    SobreClasificacion="Delgadez";
    clasificacion="Leve";
  }
  else if(imc>=18.5&& imc<24.99){
    SobreClasificacion="Normal";
  }
  else if(imc>=25){
    SobreClasificacion="SobrePeso";
    if(imc>=25 && imc<=29.99){
      clasificacion="Preobesidad ";
    }
  }
  else if(imc>=30){
    SobreClasificacion="Obesidad";
    if(imc>=30 && imc<34.99){
      clasificacion="Leve";
    }
    else if(imc>=35&& imc<=39.99){
      clasificacion ="Media";
    }
    else if (imc>=40){
      clasificacion="Mórbida";
    }
  }
  var totalClasificacion=sobreclasificacion+' '+clasificacion;
  return totalClasificacion;
}

function calcularMagro(){
  var elementoPeso=localStorage.getItem('peso');
  var elementoPorcentajeGrasa=localStorage.getItem('porcentajeGrasa');
  var pesoMagro= (elementoPeso*elementoPorcentajeGrasa)/100;
  return pesoMagro;
}
  function calcularGrasaSub(){
    var elementoPCTricepDerrecho=localStorage.getItem('pCTricepDerrecho');
    var elementoPCTricepIzquierdo=localStorage.getItem('pCTricepIzquierdo');
    var elementoPCSupraspinasDerecho=localStorage.getItem('pCSupraspinasDerecho');
    var elementoPCSupraspinasIzquierdo=localStorage.getItem('pCSupraspinasIzquierdo');
    var elementoPCPantorrillaIzquierdo=localStorage.getItem('pCPantorrillaIzquierdo');
    var elementoPCPantorrillaDerecho=localStorage.getItem('pCPantorrillaDerecho');
    var elementoPCAbdominalDerecho=localStorage.getItem('pCAbdominalDerecho');
    var elementoPCAbdominalIzquierdo=localStorage.getItem('pCAbdominalIzquierdo');
    var elementoPCSubescapularDerecho=localStorage.getItem('pCSubescapularDerecho');
    var elementoPCSubescapularIzquierdo=localStorage.getItem('pCSubescapularIzquierdo');
  var genero= localStorage.getItem('genero');
  var grasaSubCutanea=0;
  if(genero=="Masculino"){
    alert("funcionaMasculino");
    grasaSubCutanea=0.1051*(((elementoPCTricepDerrecho+elementoPCTricepIzquierdo)/2)+((elementoPCSupraspinasDerecho+elementoPCSupraspinasIzquierdo)/2)+((elementoPCPantorrillaIzquierdo+elementoPCPantorrillaDerecho)/2)+((elementoPCAbdominalDerecho+elementoPCAbdominalIzquierdo)/2)+((elementoPCSubescapularDerecho+elementoPCSubescapularIzquierdo)/2))+2.585;
  }else{
    alert("funcionaFemenino");
    grasaSubCutanea=0.1051*(((elementoPCTricepDerrecho+elementoPCTricepIzquierdo)/2)+((elementoPCSupraspinasDerecho+elementoPCSupraspinasIzquierdo)/2)+((elementoPCPantorrillaIzquierdo+elementoPCPantorrillaDerecho)/2)+((elementoPCAbdominalDerecho+elementoPCAbdominalIzquierdo)/2)+((elementoPCSubescapularDerecho+elementoPCSubescapularIzquierdo)/2))+3.580;
  }
  return grasaSubCutanea;
}
