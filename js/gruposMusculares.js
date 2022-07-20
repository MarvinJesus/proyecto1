var elementoBoton1 = document.querySelector('#btn1');

elementoBoton1.addEventListener('click' , myCanvas1);

var elementoBoton2 = document.querySelector('#btn2');

elementoBoton2.addEventListener('click' , myCanvas2);

var elementoBoton3 = document.querySelector('#btn3');

elementoBoton3.addEventListener('click' , myCanvas3);

var elementoBoton4 = document.querySelector('#btn4');

elementoBoton4.addEventListener('click' , myCanvas4);

var elementoBoton5 = document.querySelector('#btn5');

elementoBoton5.addEventListener('click' , myCanvas5);

var elementoBoton6 = document.querySelector('#btn6');

elementoBoton6.addEventListener('click' , myCanvas6);

var elementoBoton7 = document.querySelector('#cerrarSesion');

elementoBoton7.addEventListener('click' , regresar);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function myCanvas1() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.font = "24px Cornerstone";
  ctx.fillText("Ejercicios:",50,50);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Polea Tras-Nuca,Polea al Pecho,Remo en Maquina",70,70);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Remo Inclinado con Barra,Barra al Mentón ",70,90);
  ctx.font = "18px cornerstone";
  ctx.fillText("Remo en Polea,Dominadas,Encogimiento de hombros",70,110);
  ctx.font = "18px cornerstone";
  ctx.fillText("Remo horizontal,Remo en barra con una mano",70,130);

  ctx.font = "24px Cornerstone";
  ctx.fillText("Musculos:",50,150);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Músculo elevador de la escápula, Músculo infraespinosoMúsculo",70,170);
  ctx.font = "18px Cornerstone";
  ctx.fillText("subescapular, Músculo cuadrado lumbar, Músculo cuadrado lumbar ",70,190);
  ctx.font = "18px cornerstone";
  ctx.fillText("Músculo dorsal ancho,Músculo erector de la columna,Músculo espinoso",70,210);
  ctx.font = "18px cornerstone";
  ctx.fillText("Músculo multífido,Músculo romboides mayor,Músculo romboides menor600",70,230);


}
function myCanvas2() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.font = "24px Cornerstone";
  ctx.fillText("Ejercicios:",50,50);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Press de Banca,Press en Banca Inclinada,",70,70);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Aperturas Planas,Pectoral Contractor,",70,90);
  ctx.font = "18px cornerstone";
  ctx.fillText("Lagartijas,Pullover,Press de Banca Plana con",70,110);
  ctx.font = "18px cornerstone";
  ctx.fillText("Mancuernas,Press en Banca Declinada ",70,130);

  ctx.font = "24px Cornerstone";
  ctx.fillText("Musculos:",50,150);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Plexo Coracoide, Pectoral Menor",70,170);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Haz Clavicular, Haz Externocostal",70,190);


}
function myCanvas3() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.font = "24px Cornerstone";
  ctx.fillText("Ejercicios:",50,50);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Predicador con Barra,Curl concentracion con mancuerna",70,70);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Curl en Martillo,Curl con Barra,Predicador con",70,90);
  ctx.font = "18px cornerstone";
  ctx.fillText("Mancuerna, Press de banca con agarre cerrado",70,110);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Crossface,Patadas traseras,Jalones en Polea",70,130);
  ctx.font = "18px cornerstone";
  ctx.fillText("Jalones en Polea Invertido,Extensiones con apoyo",70,150);

  ctx.font = "24px Cornerstone";
  ctx.fillText("Musculos:",50,170);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Bicep braquial, Braquial Anterior,Coracobraquial",70,190);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Triceps Braquial",70,210);


}
function myCanvas4() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.font = "24px Cornerstone";
  ctx.fillText("Ejercicios:",50,50);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Curl Abdominal,Curl Abdominal Declinado",70,70);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Curl Abdominal Declinado con",70,90);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Desaceleracion,Flexion de Piernas en Banca",70,110);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Elevacion de piernas,Laterales con mancuernas",70,130);

  ctx.font = "24px Cornerstone";
  ctx.fillText("Musculos:",50,170);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Musculo Transverso abdominal, Obliquo Externo",70,190);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Obliquo Interno, Reto abdominal",70,210);


}
function myCanvas5() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.font = "24px Cornerstone";
  ctx.fillText("Ejercicios:",50,50);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Elevación de Pantorrilla Sentado,Elevación",70,70);
  ctx.font = "18px Cornerstone";
  ctx.fillText("de Pantorrilla de pie,Levantamiento de",70,90);
  ctx.font = "18px Cornerstone";
  ctx.fillText("pantorrilla en prensa,Elevación de Pantorrilla",70,110);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Burro,Elevación de talón,Desplantes",70,130);
  ctx.font = "18px Cornerstone";
  ctx.fillText("laterales,squat",70,150);

  ctx.font = "24px Cornerstone";
  ctx.fillText("Musculos:",50,170);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Soleo, Tendon de Aquiles, Gastrocnemio",70,190);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Tibial Anterior,Extensor Comun,Peroneo",70,210);


}
function myCanvas6() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.font = "24px Cornerstone";
  ctx.fillText("Ejercicios:",50,50);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Curl Abdominal,Curl Abdominal Declinado",70,70);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Curl Abdominal Declinado con",70,90);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Desaceleracion,Flexion de Piernas en Banca",70,110);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Elevacion de piernas,Laterales con mancuernas",70,130);

  ctx.font = "24px Cornerstone";
  ctx.fillText("Musculos:",50,170);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Vasto Intermedio, Vasto Medial,Vasto Lateral",70,190);
  ctx.font = "18px Cornerstone";
  ctx.fillText("Recto Femoral,Sartorio,Gracil,Pectineo",70,210);


}
function regresar() {
  window.history.back();
}
