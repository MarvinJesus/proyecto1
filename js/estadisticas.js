localStorage.setItem('genero', "Masculino");
localStorage.setItem('peso',80);
localStorage.setItem('altura',1.80);
localStorage.setItem('peso_graso',23);
localStorage.setItem('pCTricepDerrecho',15);
localStorage.setItem('pCTricepIzquierdo',15);
localStorage.setItem('pCSupraspinasDerecho',15);
localStorage.setItem('pCSupraspinasIzquierdo',15);
localStorage.setItem('pCPantorrillaIzquierdo',15);
localStorage.setItem('pCPantorrillaDerecho',15);
localStorage.setItem('pCAbdominalDerecho',15);
localStorage.setItem('pCAbdominalIzquierdo',15);
localStorage.setItem('pCSubescapularDerecho',15);
localStorage.setItem('pCSubescapularIzquierdo',15);
//
//
// crearTablaEstadísticas();

var btnPeso= document.querySelector('#btnPeso');
var btnAltura= document.querySelector('#btnAltura');
var btnClasificacion

function crearTablaEstadísticas(){
  var tblEstadisticas= document.querySelector('#tblEstadisticas tbody');
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

  function sumaPC(){
    //PC = pliegue Cutaneo
    var elementoPCTricepDerrecho=Number(localStorage.getItem('pCTricepDerrecho'));
    var elementoPCTricepIzquierdo=Number(localStorage.getItem('pCTricepIzquierdo'));
    var elementoPCSupraspinasDerecho=Number(localStorage.getItem('pCSupraspinasDerecho'));
    var elementoPCSupraspinasIzquierdo=Number(localStorage.getItem('pCSupraspinasIzquierdo'));
    var elementoPCPantorrillaIzquierdo=Number(localStorage.getItem('pCPantorrillaIzquierdo'));
    var elementoPCPantorrillaDerecho=Number(localStorage.getItem('pCPantorrillaDerecho'));
    var elementoPCAbdominalDerecho=Number(localStorage.getItem('pCAbdominalDerecho'));
    var elementoPCAbdominalIzquierdo=Number(localStorage.getItem('pCAbdominalIzquierdo'));
    var elementoPCSubescapularDerecho=Number(localStorage.getItem('pCSubescapularDerecho'));
    var elementoPCSubescapularIzquierdo=Number(localStorage.getItem('pCSubescapularIzquierdo'));

    var totalPC=((elementoPCTricepDerrecho+elementoPCTricepIzquierdo)/2) +((elementoPCSupraspinasDerecho+elementoPCSupraspinasIzquierdo)/2)
    +((elementoPCPantorrillaIzquierdo+elementoPCPantorrillaDerecho)/2)
    +((elementoPCAbdominalDerecho+elementoPCAbdominalIzquierdo)/2)
    +((elementoPCSubescapularDerecho+elementoPCSubescapularIzquierdo)/2);
    localStorage.setItem('totalPC',totalPC);

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
  var totalClasificacion="";
  document.write(clasificacion);
  if(imc<16){
    SobreClasificacion="Delgadez";
    clasificacion="Severa";
    document.write(clasificacion);
  }
  else if(imc>16 && imc<=16.99){
    SobreClasificacion="Delgadez";
    clasificacion="Moderada";
    document.write(clasificacion);
  }
  else if(imc>17 && imc<=18.49){
    SobreClasificacion="Delgadez";
    clasificacion="Leve";
    document.write(clasificacion);
  }
  else if(imc>=18.5&& imc<=24.99){
    SobreClasificacion="Normal";
    document.write(clasificacion);
  }
  else if(imc>=25){
    SobreClasificacion="SobrePeso";
    if(imc>=25 && imc<=29.99){
      clasificacion="Preobesidad ";
      document.write(clasificacion);
    }
  }
  // else if(imc>=30){
  //   SobreClasificacion="Obesidad";
  //   if(imc>=30 && imc<34.99){
  //     clasificacion="Leve";
  //     document.write(clasificacion);
  //   }
  //   else if(imc>=35&& imc<=39.99){
  //     clasificacion ="Media";
  //     document.write(clasificacion);
  //   }
  //   else if (imc>=40){
  //     clasificacion="Mórbida";
  //     document.write(clasificacion);
  //   }
  // }
  var totalClasificacion=sobreclasificacion+' '+clasificacion;
  document.write(totalClasificacion);
  return totalClasificacion;
}

function calcularMagro(){
  var elementoPeso=localStorage.getItem('peso');
  var elementoPorcentajeGrasa=localStorage.getItem('porcentajeGrasa');
  var pesoMagro= (elementoPeso*elementoPorcentajeGrasa)/100;
  return pesoMagro;
}

  function calcularGrasaSub(){
    var genero= localStorage.getItem('genero');
    var grasaSubCutanea=0;
    if(genero.value=="Masculino"){
      grasaSubCutanea=0.1051*sumaPC()+2.585;
    }else{
      grasaSubCutanea=0.1051*sumaPC()+3.580;
    }
    return grasaSubCutanea;
}

}
