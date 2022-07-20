
function validarCitas(){

  localStorage.getItem('Prueba',"si");
  var prueba=(localStorage.getItem('Prueba'));

  var divAprobada = document.querySelector('#divAprobada');
  var divError = document.querySelector('#divError');

  if(prueba == "si"){
    divAprobada.classList.remove('ocultar');
    divError.classList.add('ocultar1');
  }else{
    divError.classList.remove('ocultar1');
    divAprobada.classList.add('ocultar');
  }
}
