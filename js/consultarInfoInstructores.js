var tInfoInstructores=document.querySelector('#tblSeccion');
var btnDaniel=document.querySelector('#btn1');
var btnMarvin=document.querySelector('#btn2');
var btnRoberto=document.querySelector('#btn3');
var btnAna=document.querySelector('#btn4');
var btnRegresar= document.querySelector('#cerrarRegresar');

btnDaniel.addEventListener('click',crearTablaDaniel);
btnMarvin.addEventListener('click',crearTablaMarvin);
btnRoberto.addEventListener('click',crearTablaRoberto);
btnAna.addEventListener('click',crearTablaAna);


function regresar() {
  window.history.back();

}
function crearTablaDaniel(){
  var tbody=document.querySelector('#tblSeccion');
  tbody.innerHTML='';
  var fila1=document.createElement('tr');

  var nombre= document.createElement('td');
  var edad= document.createElement('td');
  var estudios=document.createElement('td');
  var celdaFoto = document.createElement('td');



  var nodoTextoTituloNombre=document.createTextNode('Nombre');
  var nodoTextoTituloEdad=document.createTextNode('Edad');
  var nodoTextoTituloEstudios=document.createTextNode('Estudios');
  var nodoTextoFoto=document.createTextNode('Foto');

  nombre.appendChild(nodoTextoTituloNombre);
  edad.appendChild(nodoTextoTituloEdad);
  estudios.appendChild(nodoTextoTituloEstudios);
  celdaFoto.appendChild(nodoTextoFoto);
  fila1.appendChild(nombre);
  fila1.appendChild(edad);
  fila1.appendChild(estudios);
  fila1.appendChild(celdaFoto);

    tbody.appendChild(fila1);


  var fila2=document.createElement('tr');
  var celdaNombre = document.createElement('td');
  var celdaEdad = document.createElement('td');
  var celdaEstudios = document.createElement('td');
  // var celdaImagen = document.createElement('img');
  // celdaImagen.setAttribute('src','imgs/imagental.jpg');

  var nodoTextoNombre=document.createTextNode('Daniel Chaves');
  var nodoTextoEdad=document.createTextNode('23');
  var nodoTextoEstudios=document.createTextNode('Especialista en Terapia Física, Licenciatura en Terapia Respiratoria, Universidad de Costa Rica');

  celdaNombre.appendChild(nodoTextoNombre);
  celdaEdad.appendChild(nodoTextoEdad);
  celdaEstudios.appendChild(nodoTextoEstudios);

  fila2.appendChild(celdaNombre);
  fila2.appendChild(celdaEdad);
  fila2.appendChild(celdaEstudios);

  tbody.appendChild(fila2);

  var fila3=document.createElement('tr');
  var celdaImagen=document.createElement('td');
  var imagen = document.createElement('img');
  imagen.setAttribute("src","imgs/daniel2.jpg");
  imagen.setAttribute("class","imgSeccion")

  celdaImagen.appendChild(imagen);
  fila2.appendChild(celdaImagen);
  tbody.appendChild(fila3);
}
function crearTablaMarvin(){
  var tbody=document.querySelector('#tblSeccion');
  tbody.innerHTML='';
  var fila1=document.createElement('tr');

  var nombre= document.createElement('td');
  var edad= document.createElement('td');
  var estudios=document.createElement('td');
  var celdaFoto = document.createElement('td');



  var nodoTextoTituloNombre=document.createTextNode('Nombre');
  var nodoTextoTituloEdad=document.createTextNode('Edad');
  var nodoTextoTituloEstudios=document.createTextNode('Estudios');
  var nodoTextoFoto=document.createTextNode('Foto');

  nombre.appendChild(nodoTextoTituloNombre);
  edad.appendChild(nodoTextoTituloEdad);
  estudios.appendChild(nodoTextoTituloEstudios);
  celdaFoto.appendChild(nodoTextoFoto);
  fila1.appendChild(nombre);
  fila1.appendChild(edad);
  fila1.appendChild(estudios);
  fila1.appendChild(celdaFoto);

    tbody.appendChild(fila1);


  var fila2=document.createElement('tr');
  var celdaNombre = document.createElement('td');
  var celdaEdad = document.createElement('td');
  var celdaEstudios = document.createElement('td');
  // var celdaImagen = document.createElement('img');
  // celdaImagen.setAttribute('src','imgs/imagental.jpg');

  var nodoTextoNombre=document.createTextNode('Marvin Calvo');
  var nodoTextoEdad=document.createTextNode('25');
  var nodoTextoEstudios=document.createTextNode('Especialista en Terapia Física, Licenciatura en Terapia Respiratoria, Universidad de Costa Rica');

  celdaNombre.appendChild(nodoTextoNombre);
  celdaEdad.appendChild(nodoTextoEdad);
  celdaEstudios.appendChild(nodoTextoEstudios);

  fila2.appendChild(celdaNombre);
  fila2.appendChild(celdaEdad);
  fila2.appendChild(celdaEstudios);

  tbody.appendChild(fila2);

  var fila3=document.createElement('tr');
  var celdaImagen=document.createElement('td');
  var imagen = document.createElement('img');
  imagen.setAttribute("src","imgs/marvin.jpg");
  imagen.setAttribute("class","imgSeccion")

  celdaImagen.appendChild(imagen);
  fila2.appendChild(celdaImagen);
  tbody.appendChild(fila3);
}
function crearTablaRoberto(){
  var tbody=document.querySelector('#tblSeccion');
  tbody.innerHTML='';
  var fila1=document.createElement('tr');

  var nombre= document.createElement('td');
  var edad= document.createElement('td');
  var estudios=document.createElement('td');
  var celdaFoto = document.createElement('td');



  var nodoTextoTituloNombre=document.createTextNode('Nombre');
  var nodoTextoTituloEdad=document.createTextNode('Edad');
  var nodoTextoTituloEstudios=document.createTextNode('Estudios');
  var nodoTextoFoto=document.createTextNode('Foto');

  nombre.appendChild(nodoTextoTituloNombre);
  edad.appendChild(nodoTextoTituloEdad);
  estudios.appendChild(nodoTextoTituloEstudios);
  celdaFoto.appendChild(nodoTextoFoto);
  fila1.appendChild(nombre);
  fila1.appendChild(edad);
  fila1.appendChild(estudios);
  fila1.appendChild(celdaFoto);

    tbody.appendChild(fila1);


  var fila2=document.createElement('tr');
  var celdaNombre = document.createElement('td');
  var celdaEdad = document.createElement('td');
  var celdaEstudios = document.createElement('td');
  // var celdaImagen = document.createElement('img');
  // celdaImagen.setAttribute('src','imgs/imagental.jpg');

  var nodoTextoNombre=document.createTextNode('Roberto Beeche');
  var nodoTextoEdad=document.createTextNode('26');
  var nodoTextoEstudios=document.createTextNode('Especialista en Terapia Física, Licenciatura en Terapia Respiratoria, Universidad de Costa Rica');

  celdaNombre.appendChild(nodoTextoNombre);
  celdaEdad.appendChild(nodoTextoEdad);
  celdaEstudios.appendChild(nodoTextoEstudios);

  fila2.appendChild(celdaNombre);
  fila2.appendChild(celdaEdad);
  fila2.appendChild(celdaEstudios);

  tbody.appendChild(fila2);

  var fila3=document.createElement('tr');
  var celdaImagen=document.createElement('td');
  var imagen = document.createElement('img');
  imagen.setAttribute("src","imgs/roberto.jpg");
  imagen.setAttribute("class","imgSeccion")

  celdaImagen.appendChild(imagen);
  fila2.appendChild(celdaImagen);
  tbody.appendChild(fila3);
}
function crearTablaAna(){
  var tbody=document.querySelector('#tblSeccion');
  tbody.innerHTML='';
  var fila1=document.createElement('tr');

  var nombre= document.createElement('td');
  var edad= document.createElement('td');
  var estudios=document.createElement('td');
  var celdaFoto = document.createElement('td');



  var nodoTextoTituloNombre=document.createTextNode('Nombre');
  var nodoTextoTituloEdad=document.createTextNode('Edad');
  var nodoTextoTituloEstudios=document.createTextNode('Estudios');
  var nodoTextoFoto=document.createTextNode('Foto');

  nombre.appendChild(nodoTextoTituloNombre);
  edad.appendChild(nodoTextoTituloEdad);
  estudios.appendChild(nodoTextoTituloEstudios);
  celdaFoto.appendChild(nodoTextoFoto);
  fila1.appendChild(nombre);
  fila1.appendChild(edad);
  fila1.appendChild(estudios);
  fila1.appendChild(celdaFoto);

    tbody.appendChild(fila1);


  var fila2=document.createElement('tr');
  var celdaNombre = document.createElement('td');
  var celdaEdad = document.createElement('td');
  var celdaEstudios = document.createElement('td');
  // var celdaImagen = document.createElement('img');
  // celdaImagen.setAttribute('src','imgs/imagental.jpg');

  var nodoTextoNombre=document.createTextNode('Ana Cheri');
  var nodoTextoEdad=document.createTextNode('28');
  var nodoTextoEstudios=document.createTextNode('Especialista en Terapia Física, Licenciatura en Terapia Respiratoria, Universidad de Costa Rica');

  celdaNombre.appendChild(nodoTextoNombre);
  celdaEdad.appendChild(nodoTextoEdad);
  celdaEstudios.appendChild(nodoTextoEstudios);

  fila2.appendChild(celdaNombre);
  fila2.appendChild(celdaEdad);
  fila2.appendChild(celdaEstudios);

  tbody.appendChild(fila2);

  var fila3=document.createElement('tr');
  var celdaImagen=document.createElement('td');
  var imagen = document.createElement('img');
  imagen.setAttribute("src","imgs/anacheri.jpg");
  imagen.setAttribute("class","imgSeccion")

  celdaImagen.appendChild(imagen);
  fila2.appendChild(celdaImagen);
  tbody.appendChild(fila3);
}
