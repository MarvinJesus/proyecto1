var tblInfoGym= document.querySelector('#tblSeccion');
var btnGuardarCambios=document.querySelector('#guardarCambios');
localStorage.setItem('nombreGym', 'Phaetons Gym');
localStorage.setItem('ubicacionGym','La Herediana de Siquirres – Costa Rica');
localStorage.setItem('horarioGym','Lunes a Viernes: 8:00 am - 10:00 pm, Sábados y Domingos: 	8:00 am - 4:00 pm');

var nombrePrincipal=localStorage.getItem('nombreGym');
var ubicacionPrincipal=localStorage.getItem('ubicacionGym');
var horarioPrincipal =localStorage.getItem('horarioGym');



btnGuardarCambios.addEventListener('click',guardarCambios);



  var fila1= document.createElement('tr');
  var fila2= document.createElement('tr');
  var fila3= document.createElement('tr');
  var fila4= document.createElement('tr');


  var tituloNombre=document.createElement('td');
  var tituloUbicacion=document.createElement('td');
  var tituloHorario=document.createElement('td');

  var nodoTxtTituloNombre=document.createTextNode("Nombre");
  var nodoTxtTituloUbicacion=document.createTextNode("Ubicacion");
  var nodoTxtTituloHorario=document.createTextNode("Horario");

  tituloNombre.appendChild(nodoTxtTituloNombre);
  tituloUbicacion.appendChild(nodoTxtTituloUbicacion);
  tituloHorario.appendChild(nodoTxtTituloHorario);

  fila1.appendChild(tituloNombre);
  fila1.appendChild(tituloUbicacion);
  fila1.appendChild(tituloHorario);

  tblInfoGym.appendChild(fila1);


  var nombre=document.createElement('td')
  var celdaNombre=document.createElement('input');
  celdaNombre.setAttribute("value",nombrePrincipal);
  celdaNombre.setAttribute("id","nombre");
  celdaNombre.setAttribute("class","inputCambio");
  nombre.appendChild(celdaNombre)
  fila2.appendChild(nombre);

  var ubicacion=document.createElement('td')
  var celdaUbicacion=document.createElement('input');
   celdaUbicacion.setAttribute("value",ubicacionPrincipal);
   celdaUbicacion.setAttribute("id","ubicacion");
   celdaUbicacion.setAttribute("class","inputCambio");
   ubicacion.appendChild(celdaUbicacion);
   fila2.appendChild(ubicacion);

  var horario=document.createElement('td')
  var celdaHorario=document.createElement('input');
  celdaHorario.setAttribute("value",horarioPrincipal);
  celdaHorario.setAttribute("id","horario");
  celdaHorario.setAttribute("class","inputCambio");
  horario.appendChild(celdaHorario);
  fila2.appendChild(horario);
  tblInfoGym.appendChild(fila2);


function guardarCambios(){
  document.write(celdaNombre.value);
  localStorage.setItem('nombreGym',celdaNombre.value);
  localStorage.setItem('ubicacionGym',celdaUbicacion.value);
  localStorage.setItem('horarioGym', celdaHorario.value);
}
