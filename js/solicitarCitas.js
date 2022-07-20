var arrayListaCitarnombreInstructores=['Ricardo Lorem','Marcos Leyba','Carlos gutierrez','Linda Monge','Juanita Pit','Chen Chan Ton'];
var cita='';
var arrayListaIdCitas=[];
var arrayListaCitasInstructorSeleccionado=[];
var arrayListaFechasDCitas=[];
var arrayListaHorasDCitas=[];
var arrayTipoCita=[];
var tituloP= document.querySelector('#tituloP');

function crearCitasContro(p){


  var tbody = document.querySelector('#tblInfoCitas  tbody');
  var thead = document.querySelector('#tblInfoCitas thead');
  var div= document.querySelector('#contenedorInstructores');

  tbody.innerHTML = '';
  div.innerHTML = '';
  tituloP.innerHTML='';
    

   
    var fila1= document.createElement('tr');
    var fila2= document.createElement('tr');
    var fila3= document.createElement('tr');
    

    var nodoTextoP=document.createTextNode('Citas para Control  ');
     tituloP.appendChild(nodoTextoP);
     cita='Cita para Contro';
    


    var informacionFecha= document.createElement('td');
    var nodotxtFecha=document.createTextNode("Fecha de la Cita");
    informacionFecha.appendChild(nodotxtFecha);
    fila1.appendChild(informacionFecha);

    var fecha= document.createElement('input');
    fecha.setAttribute('id','fechaCitaControl');
    fecha.setAttribute('type','date');
    fila1.appendChild(fecha);


     var  informacionHoraCita= document.createElement('td');
    var nodotxtHora=document.createTextNode("Hora de la Cita");
    informacionHoraCita.appendChild(nodotxtHora);
    fila2.appendChild(informacionHoraCita);



    var  hora=document.createElement('input');
     hora.setAttribute('id','horaCitaControl');
     hora.setAttribute('type','time');
     fila2.appendChild(hora);



    var informacionIdCliente= document.createElement('td');
    var nodotxtIdCliente=document.createTextNode("Ingrese su id");
    informacionIdCliente.appendChild(nodotxtIdCliente);
    fila3.appendChild(informacionIdCliente);

    var  idCliente=document.createElement('input');
     idCliente.setAttribute('id','idCliente');
     idCliente.setAttribute('type','text');
     fila3.appendChild(idCliente);

     

    

    tbody.appendChild(fila1);
    tbody.appendChild(fila2);
    tbody.appendChild(fila3);



     var p=document.createElement('p');
     var nodoTextP=document.createTextNode('Escoja el instructor para su cita');
     p.appendChild(nodoTextP);
     div.appendChild(p);


     var p=document.createElement('p');
     var nodoTextP2=document.createTextNode('Ricardo Lorem');
     p.appendChild(nodoTextP2);
     div.appendChild(p);

     var img1=document.createElement('img');
     img1.setAttribute('src','imgs/img_55c9e36d8536f.jpg');
     div.appendChild(img1);

     var rbtInstructo1= document.createElement('input');
     rbtInstructo1.setAttribute('type','radio');
     rbtInstructo1.setAttribute('value',"0");
     rbtInstructo1.setAttribute('name','instructor');
     rbtInstructo1.setAttribute('id','rbtInstructo1');

     div.appendChild(rbtInstructo1);


     var p=document.createElement('p');
     var nodoTextP3=document.createTextNode('Marcos Leyba');
     p.appendChild(nodoTextP3);
     div.appendChild(p);

     var img2=document.createElement('img');
     img2.setAttribute('src','imgs/images1.jpg');
     div.appendChild(img2);

     var rbtInstructo2= document.createElement('input');
     rbtInstructo2.setAttribute('type','radio');
     rbtInstructo2.setAttribute('name','instructor');
     rbtInstructo2.setAttribute('value','1');
     rbtInstructo2.setAttribute('id','rbtInstructo2');

     div.appendChild(rbtInstructo2);





   
    return false;

    }


function crearCitasRecistencias(l){

  var div= document.querySelector('#contenedorInstructores');
  var tbody = document.querySelector('#tblInfoCitas  tbody');
  var thead = document.querySelector('#tblInfoCitas thead');

  tbody.innerHTML = '';
  div.innerHTML = '';
  tituloP.innerHTML='';

   cita='Cita para prueba Resistencias';

   
    var fila1= document.createElement('tr');
    var fila2= document.createElement('tr');
    var fila3= document.createElement('tr');
    var p=document.createElement('p');
    var nodoTextoP=document.createTextNode('Citas para prueba Recistencias ');
     tituloP.appendChild(nodoTextoP);


    var informacionFecha= document.createElement('td');
    var nodotxtFecha=document.createTextNode("Fecha de la Cita");
    informacionFecha.appendChild(nodotxtFecha);
    fila1.appendChild(informacionFecha);

    var fecha= document.createElement('input');
    fecha.setAttribute('id','fechaCitaControl');
    fecha.setAttribute('type','date');
    fila1.appendChild(fecha);


    var  informacionHoraCita= document.createElement('td');
    var nodotxtHora=document.createTextNode("Hora de la Cita");
    informacionHoraCita.appendChild(nodotxtHora);
    fila2.appendChild(informacionHoraCita);



    var  hora=document.createElement('input');
     hora.setAttribute('id','horaCitaControl');
     hora.setAttribute('type','time');
     fila2.appendChild(hora);


    var informacionIdCliente= document.createElement('td');
    var nodotxtIdCliente=document.createTextNode("Ingrese su id");
    informacionIdCliente.appendChild(nodotxtIdCliente);
    fila3.appendChild(informacionIdCliente);
    
    var  idCliente=document.createElement('input');
     idCliente.setAttribute('id','idCliente');
     idCliente.setAttribute('type','text');
     fila3.appendChild(idCliente);

    tbody.appendChild(fila1);
    tbody.appendChild(fila2);
    tbody.appendChild(fila3);

    var p=document.createElement('p');
    var nodoTextP=document.createTextNode('Escoja el instructor para su cita');
    p.appendChild(nodoTextP);
    div.appendChild(p);

    var p=document.createElement('p');
     var nodoTextP2=document.createTextNode('Carlos Gutierrez');
     p.appendChild(nodoTextP2);
     div.appendChild(p);

     var img1=document.createElement('img');
     img1.setAttribute('src','imgs/masculino.jpg');
     div.appendChild(img1);

     var rbtInstructo1= document.createElement('input');
     rbtInstructo1.setAttribute('type','radio');
     rbtInstructo1.setAttribute('value','2');
     rbtInstructo1.setAttribute('id','rbtInstructo1');
     rbtInstructo1.setAttribute('name','instructor');

     div.appendChild(rbtInstructo1);


     var p=document.createElement('p');
     var nodoTextP3=document.createTextNode('Linda Monge');
     p.appendChild(nodoTextP3);
     div.appendChild(p);

     var img2=document.createElement('img');
     img2.setAttribute('src','imgs/images.jpg');
     div.appendChild(img2);

     var rbtInstructo2= document.createElement('input');
     rbtInstructo2.setAttribute('type','radio');
     rbtInstructo2.setAttribute('name','instructor');
     rbtInstructo2.setAttribute('id','rbtInstructo2');
     rbtInstructo2.setAttribute('value','3');
     div.appendChild(rbtInstructo2);
   
     return false;
    }




function crearCitasMedicion(t){

  var div= document.querySelector('#contenedorInstructores');
  var tbody = document.querySelector('#tblInfoCitas  tbody');
  var thead = document.querySelector('#tblInfoCitas thead');
  tbody.innerHTML = '';
  tituloP.innerHTML='';
  div.innerHTML = '';
  
  cita='Cita para medicion';
  

   
    var fila1= document.createElement('tr');
    var fila2= document.createElement('tr');
    var fila3= document.createElement('tr');
    
     var nodoTextoP=document.createTextNode('Citas para Medición ');
     tituloP.appendChild(nodoTextoP);
    


    var informacionFecha= document.createElement('td');
    var nodotxtFecha=document.createTextNode("Fecha de la Cita");
    informacionFecha.appendChild(nodotxtFecha);
    fila1.appendChild(informacionFecha);

    var fecha= document.createElement('input');
    fecha.setAttribute('id','fechaCitaControl');
    fecha.setAttribute('type','date');
    fila1.appendChild(fecha);


    var  informacionHoraCita= document.createElement('td');
    var nodotxtHora=document.createTextNode("Hora de la Cita");
    informacionHoraCita.appendChild(nodotxtHora);
    fila2.appendChild(informacionHoraCita);



    var  hora=document.createElement('input');
     hora.setAttribute('id','horaCitaControl');
     hora.setAttribute('type','time');
     fila2.appendChild(hora);


     var informacionIdCliente= document.createElement('td');
    var nodotxtIdCliente=document.createTextNode("Ingrese su id");
    informacionIdCliente.appendChild(nodotxtIdCliente);
    fila3.appendChild(informacionIdCliente);
    
    var  idCliente=document.createElement('input');
     idCliente.setAttribute('id','idCliente');
     idCliente.setAttribute('type','text');
     fila3.appendChild(idCliente);

    tbody.appendChild(fila1);
    tbody.appendChild(fila2);
    tbody.appendChild(fila3);

     var p=document.createElement('p');
     var nodoTextP=document.createTextNode('Escoja el instructor para su cita');
     p.appendChild(nodoTextP);
     div.appendChild(p);


    var p=document.createElement('p');
     var nodoTextP2=document.createTextNode('Juanita Pit');
     p.appendChild(nodoTextP2);
     div.appendChild(p);

     var img1=document.createElement('img');
     img1.setAttribute('src','imgs/images2.jpg');
     div.appendChild(img1);

     var rbtInstructo1= document.createElement('input');
     rbtInstructo1.setAttribute('type','radio');
     rbtInstructo1.setAttribute('value','4');
     rbtInstructo1.setAttribute('id','rbtInstructo1');
     rbtInstructo1.setAttribute('name','instructor');

     div.appendChild(rbtInstructo1);


     var p=document.createElement('p');
     var nodoTextP3=document.createTextNode('Chen Chan Ton');
     p.appendChild(nodoTextP3);
     div.appendChild(p);

     var img2=document.createElement('img');
     img2.setAttribute('src','imgs/dolos-kpop-fotos-2-jpg.jpg');
     div.appendChild(img2);

     var rbtInstructo2= document.createElement('input');
     rbtInstructo2.setAttribute('type','radio');
     rbtInstructo2.setAttribute('name','instructor');
     rbtInstructo2.setAttribute('id','rbtInstructo2');
     rbtInstructo2.setAttribute('value','5');
     div.appendChild(rbtInstructo2);
   
    return false;
    }



function registrarCita(v){

    var errorRegistro=true;

    var idCliente=document.querySelector('#idCliente');

    if(!idCliente.value== ''){

     arrayListaIdCitas.push(idCliente.value);

     $('#alert').html('').slideUp(300);
     idCliente.className='bienStyle';

    }else{
        
      $('#alert').html('Ingrese su id').slideDown(500);
      idCliente.className='errorStyle';
      errorRegistro=false;
     
      
    }

    var fechaCitaCliente=document.querySelector('#fechaCitaControl');
    

    if(!fechaCitaCliente.value== ''){

     arrayListaFechasDCitas.push(fechaCitaCliente.value);

     $('#alert').html('').slideUp(300);
     fechaCitaCliente.className='bienStyle';

    }else{
        
      $('#alert').html('Ingrese la fecha para su cita').slideDown(500);
      fechaCitaCliente.className='errorStyle';
      errorRegistro=false;
      
    }

    var horaCitaCliente=document.querySelector('#horaCitaControl');
  


    if(!horaCitaCliente.value== ''){

     arrayListaHorasDCitas.push(horaCitaCliente.value);

     $('#alert').html('').slideUp(300);
     horaCitaCliente.className='bienStyle';

    }else{
        
      $('#alert').html('Ingrese la hora para su cita').slideDown(500);
      horaCitaCliente.className='errorStyle';
      errorRegistro=false;
      
      }
    

    var noSeleccionoInstructor=true;



    if(document.querySelector('#rbtInstructo1').checked){
       
        var rbtBotton=document.querySelector('#rbtInstructo1'); 
       
        arrayListaCitasInstructorSeleccionado.push(arrayListaCitarnombreInstructores[rbtBotton.value]);

        noSeleccionoInstructor=false;

        $('#alert').html('').slideUp(300);
        rbtBotton.className='bienStyle';


    }else{

         if(document.querySelector('#rbtInstructo2').checked){
               
                var rbtBotton=document.querySelector('#rbtInstructo2'); 
               
                arrayListaCitasInstructorSeleccionado.push(arrayListaCitarnombreInstructores[rbtBotton.value]);

                  noSeleccionoInstructor=false;

                 $('#alert').html('').slideUp(300);
                 rbtBotton.className='bienStyle';


         }else{

            $('#alert').html('Seleccione un instructor').slideDown(500);
            rbtBotton.className='errorStyle';
            errorRegistro=false;

        }


    }
    
    if(!errorRegistro==false){

         $('#alert').html('Su cita se registro exitosamente').slideDown(500);

    }
    

        
    
        
    
        arrayTipoCita.push(cita);


    
     alert(arrayListaIdCitas[0]);
     alert(arrayListaCitasInstructorSeleccionado[0]);
     alert(arrayListaCitasInstructorSeleccionado[1]);
     alert(arrayListaFechasDCitas[0]);
     alert(arrayListaHorasDCitas[0]);
     
     




 }
 



function consultarCitas(){



      var div=document.querySelector('#cajaParaId');
      div.innerHTML = '';

      var input=document.createElement('input');
      input.setAttribute('type','text');
     
      input.setAttribute('placeholder','Hola MUndo');
      input.setAttribute('id','valor');
      var label=document.createElement('label');
      var nodotextLabel=document.createTextNode('ingrese su id');
      label.setAttribute('for','valor');
      label.appendChild(nodotextLabel);

      
      div.appendChild(label);
      div.appendChild(input);


      
}


    

function buscarCitasPoId(){

    var tbody = document.querySelector('#tblInfoCitas  tbody');
    var thead = document.querySelector('#tblInfoCitas thead');
    var div=document.querySelector('#cajaParaId');
    

    var indice=document.getElementById('valor').value;
    var encontrado=true
     
     alert('holas soy el valor del indice del cliente'+indice);

    for(var i=0;i<arrayListaIdCitas.length;i++){
        
        if(arrayListaIdCitas[i]==indice){

            alert('holas soy texto'+i);
            encontrado=false;
            indice=i;


        }

    };

    if(!encontrado==true){
        
        $('#alert').html('').slideUp(300);

         div.innerHTML = '';

         var labelTipoCita=document.createElement('label');

         labelTipoCita.setAttribute('for','tipoCita');

         var nodotextLabelTipoCita=document.createTextNode('Tipo cita');

         labelTipoCita.appendChild(nodotextLabelTipoCita);

         
         var inputTipoCita=document.createElement('input');
         inputTipoCita.setAttribute('type','text');
         inputTipoCita.setAttribute('id','tipoCita');
         inputTipoCita.setAttribute('value',arrayTipoCita[indice]);

         div.appendChild(labelTipoCita);
         div.appendChild(inputTipoCita);



         var labelInstructor=document.createElement('label');

         labelInstructor.setAttribute('for','instructor');

         var nodotextLabelInstructor=document.createTextNode('Instructor');

         labelInstructor.appendChild(nodotextLabelInstructor);

         
         var inputInstructor=document.createElement('input');
         inputInstructor.setAttribute('type','text');
         inputInstructor.setAttribute('id','instructor');
         inputInstructor.setAttribute('value',arrayListaCitasInstructorSeleccionado[indice]);

         div.appendChild(labelInstructor);
         div.appendChild(inputInstructor);





         var labelFechaCita=document.createElement('label');

         labelFechaCita.setAttribute('for','fechaCita');

         var nodotextLabelFechaCita=document.createTextNode('Fecha cita');

         labelFechaCita.appendChild(nodotextLabelFechaCita);

         
         var inputFechaCita=document.createElement('input');
         inputFechaCita.setAttribute('type','text');
         inputFechaCita.setAttribute('id','fechaCita');
         inputFechaCita.setAttribute('value',arrayListaFechasDCitas[indice]);

         div.appendChild(labelFechaCita);
         div.appendChild(inputFechaCita);


         var labelHoraCita=document.createElement('label');

         labelHoraCita.setAttribute('for','horaCita');

         var nodotextLabelHoraCita=document.createTextNode('Hora de cita');

         labelHoraCita.appendChild(nodotextLabelHoraCita);

         
         var inputHoraCita=document.createElement('input');
         inputHoraCita.setAttribute('type','text');
         inputHoraCita.setAttribute('id','horaCita');
         inputHoraCita.setAttribute('value',arrayListaHorasDCitas[indice]);

         div.appendChild(labelHoraCita);
         div.appendChild(inputHoraCita);

         
        
         
    }else{

        $('#alert').html('No tiene citas relacionadas').slideDown(500);

    };


 }
 
 




























    
    