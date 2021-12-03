/*Este metodo se ejecuta al cargar la página, oculta los elementos
que no necesitamos inicialmente y habilito el texto para animar*/
window.onload = function() 
{
  document.getElementById('resume').style.display = 'none';
  document.getElementById('ecabeza').style.display = 'none';
  document.getElementById('btn1').style.display = 'none';
  document.getElementById('btn2').style.display = 'none';
  document.getElementById('btn3').style.display = 'none';
  document.getElementById('btn4').style.display = 'none';
  document.getElementById('l_text').style.display = 'block';
}
//------------------Cadenas de texto para texto animado------------------
const typed = new Typed('.typed', 
{
    strings: 
	[
        '<i class="mascota"><h3>Un buen código es su mejor documentación<q>-steve McConnell<q></i>', 
        '<i class="mascota"></i>'
	],
  //--------Configuraciones de acción y transición del texto--------------
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato    
}   
);
 let nombre
function lets_go() 
/*Metodo para iniciar, interactua con el usuario al solicitar el nombre
 y guardarlo, Muestra y Oculta Elementos, Ejecuta la acción de generar
las preguntas del archivo base y elegirlas aleatoriamente*/
{
 nombre= prompt("Por favor ingrese su nombre de Usuario para comenzar")
 if(nombre.trim()!="")
 {
  base_preguntas = readText("base-preguntas.json")
  interprete_bp = JSON.parse(base_preguntas)
  escogerPreguntaAleatoria()
  document.getElementById('other').style.display = 'none'; 
  document.getElementById('l_reto').style.display = 'none'; 
  document.getElementById('imacentral').style.display = 'none';
  document.getElementById('ecabeza').style.display = 'block';
  document.getElementById('btn1').style.display = 'block';
  document.getElementById('btn2').style.display = 'block';
  document.getElementById('btn3').style.display = 'block';
  document.getElementById('btn4').style.display = 'block';
 }
 else
  {
   alert("Por favor digite su nombre para comenzar")
  }
}
let pregunta
let posibles_respuestas
btn_correspondiente = 
 [
   select_id("btn1"), select_id("btn2"),
   select_id("btn3"), select_id("btn4")
 ]
npreguntas = []
let preguntas_hechas = 0
let preguntas_correctas = 0
function escogerPreguntaAleatoria()
/*Metodo para elegir las preguntas aleatoriamente*/
 {
   let n = Math.floor(Math.random() * interprete_bp.length)
   while(npreguntas.includes(n))
       {
       n++
       if(n >= interprete_bp.length)
         {
           n = 0
         }
       if(npreguntas.length == interprete_bp.length)
         {
          npreguntas = []
         }
       }
  npreguntas.push(n)
  preguntas_hechas++
  escogerPregunta(n)
}
function escogerPregunta(n)
/*Metodo para elegir las preguntas del archivo .json*/
 {
   pregunta = interprete_bp[n]
   select_id("categoria").innerHTML = pregunta.categoria
   select_id("pregunta").innerHTML = pregunta.pregunta
   select_id("numero").innerHTML = n
   let pc = preguntas_correctas
     if(preguntas_hechas == 13)
     /*Cuando se cumple este limite de preguntas que elegí no continua
     preguntando y me oculta y muestras elementos para mostrar resumen*/
     {
       select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas-1)
       document.getElementById('other').style.display = 'none'; 
       document.getElementById('l_reto').style.display = 'none'; 
       document.getElementById('imacentral').style.display = 'none';
       document.getElementById('ecabeza').style.display = 'none';
       document.getElementById('btn1').style.display = 'none';
       document.getElementById('btn2').style.display = 'none';
       document.getElementById('btn3').style.display = 'none';
       document.getElementById('btn4').style.display = 'none';
       document.getElementById('puntaje').style.display = 'none';
       document.getElementById('resume').style.display = 'block';        
       document.getElementById('n_user').value = nombre;
       let putotal = document.getElementById('puntaje')
       let ptal = 12
       let porc = 100 / ptal * pc;
       let pml = ptal - pc;
       let t_acumulado ="Progreso total: "+ pc+"/"+ptal     
       document.getElementById('r_porcentaje').value = porc+"%";
       document.getElementById('rcorrecto').value = t_acumulado; 
       let mensajeP
       /*Muestran un mensaje si se cumple alguna de esas condiciones
       de acuerdo al resultado del cuestionario*/
         if(pc==1||pc==2||pc==3)
          {
           mensajeP="No sabes nada aún del chocó chocuanizate"
           document.getElementById('r_mensaje').value = mensajeP;       
          }
        else if(pc==4||pc==5||pc==6||pc==7)
        {
          mensajeP="Sabes poco del chocó acércate conoce y disfruta"
          document.getElementById('r_mensaje').value = mensajeP; 
        }
        else if(pc==8||pc==9||pc==10||pc==11)
        {
          mensajeP="Muy bien sabes bastante del chocó es Genial"
          document.getElementById('r_mensaje').value = mensajeP; 
        }
        else if(pc==12)
        {
          mensajeP="Excelente eres un chocoano 100% y Original"
          document.getElementById('r_mensaje').value = mensajeP; 
        }
        else
        {
          mensajeP="Qué mal, No pudo responder ni Una Pregunta bien!"
          document.getElementById('r_mensaje').value = mensajeP; 
        }
     }
     if(preguntas_hechas>1)
     {
       select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas-1)
     }
   else
     {
       select_id("puntaje").innerHTML = ""
     }
  style("imagen").objectFit = pregunta.objectFit;
  
  desordenarRespuestas(pregunta)
    if(pregunta.imagen)
      {
       select_id("imagen").setAttribute("src", pregunta.imagen)
       style("imagen").height = "200px"
       style("imagen").width = "100%"
      }
    else
      {
       style("imagen").height = "0px"
       style("imagen").width = "0px"
       setTimeout(()=>
        {
          select_id("imagen").setAttribute("src", "")
        },500);
      }
  }
  /*Acciones para desordenar las respuestas*/
function desordenarRespuestas(pregunta)
  {
    posibles_respuestas =
    [
      pregunta.respuesta,
      pregunta.incorrecta1,
      pregunta.incorrecta2,
      pregunta.incorrecta3
    ]
    posibles_respuestas.sort(() => Math.random() - 0.5)
    select_id("btn1").innerHTML = posibles_respuestas[0]
    select_id("btn2").innerHTML = posibles_respuestas[1]
    select_id("btn3").innerHTML = posibles_respuestas[2]
    select_id("btn4").innerHTML = posibles_respuestas[3]
  }
 let suspender_botones = false
 function oprimir_btn(i)
 {
  if(suspender_botones)
   {
     return
   }
  suspender_botones = true
  if(posibles_respuestas[i] == pregunta.respuesta)
    {
      preguntas_correctas++
      btn_correspondiente[i].style.background = "lightgreen"
    }
  else
    {
      btn_correspondiente[i].style.background = "pink"
    }
  for(let j = 0; j < 4; j++)
    {
      if(posibles_respuestas[j] == pregunta.respuesta)
        {
          btn_correspondiente[j].style.background = "lightgreen"
          break
        }
     }
  setTimeout(()=>
   {
     reiniciar()
    suspender_botones = false
   }, 3000);
}
function reiniciar()
 {
   for(const btn of btn_correspondiente)
     {
       btn.style.background = "white"
     }
   escogerPreguntaAleatoria()
 }
function select_id(id)
  {
    return document.getElementById(id)
  }
function style(id)
 {
   return select_id(id).style
 }
function readText(ruta_local)
 {
   var texto = null;
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET", ruta_local, false);
   xmlhttp.send();
   if(xmlhttp.status == 200)
    {
      texto = xmlhttp.responseText;
    }
   return texto;
 }
function recargapage()
{
  location.reload();
}

document.getElementById("begin").addEventListener("click", lets_go);

