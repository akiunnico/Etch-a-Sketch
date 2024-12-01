let numeroCasillas = 16;
let encendido = false;
let estilo = "black";

const botones = document.querySelectorAll(".botonera > button");

botones.forEach((e) => e.addEventListener("click", activaBoton));

const off = document.querySelector(".botonera > p");

const lienzo = document.querySelector(".lienzo");


function pintaCuadricula(numeroCasillas){
  lienzo.textContent = "";
  let anchoCasilla = 600 / numeroCasillas;
  for (i=0; i<Math.pow(numeroCasillas, 2); i++){
    let div = document.createElement("div");
    
      div.addEventListener("mouseout", pinta);

    div.style.width = (`${anchoCasilla}px`);
    div.style.height = (`${anchoCasilla}px`);
    // div.textContent = i;
    lienzo.appendChild(div);
  }
}

pintaCuadricula(numeroCasillas);

const boton = document.querySelector(".boton");

boton.addEventListener("click", pideNumeroCasillas)

function pideNumeroCasillas(){
  numeroCasillas = parseInt(prompt("Dime de 0 a 100 cuantas casillas quieres por linea"));
  if(isNaN(numeroCasillas) || numeroCasillas < 1 || numeroCasillas > 100){
    alert("Solo números entre 1 y 100")
  }else{
    pintaCuadricula(numeroCasillas);
  } 
}


lienzo.addEventListener("click", enciendeApaga);

function enciendeApaga(){
  encendido = !encendido;
  if(encendido) {
    off.classList.add("encendido");
    off.textContent = "Encendido";
  }else{
    off.classList.remove("encendido");
    off.classList.add("apagado");
    off.textContent = "Apagado";
  }
  
  
}

function pinta(){
  if(encendido){

    // botones.forEach((e)=>e.removeAttribute("class"));

    switch(estilo){
     
      case "random":
        this.style.backgroundColor = `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
        break;
      case "white":
        this.style.backgroundColor = "white";
        break;
        default: 
        this.style.backgroundColor = "black";
    }
  }
 
}

function setEstilo(seleccion){
  estilo = seleccion;
}
function clean(){
  const casillas = document.querySelectorAll(".lienzo>div");
  casillas.forEach(casilla => {casilla.style.backgroundColor = "white";
    
  });
}

function activaBoton(){
  botones.forEach((e)=> e.removeAttribute("class"));
  this.classList.add("active");
}