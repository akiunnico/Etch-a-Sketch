let numeroCasillas = 16;

const contenedor = document.querySelector(".container");

pintaCuadricula(numeroCasillas);

const boton = document.querySelector("button");

boton.addEventListener("click", pideNumeroCasillas)

function pideNumeroCasillas(){
  numeroCasillas = parseInt(prompt("Dime de 0 a 100 cuantas casillas quieres por linea"));
  if(isNaN(numeroCasillas) || numeroCasillas < 1 || numeroCasillas > 100){
    alert("Solo números entre 1 y 100")
  }else{
    pintaCuadricula(numeroCasillas);
  } 
}

function pintaCuadricula(numeroCasillas){
  contenedor.textContent = "";
  let anchoCasilla = 960 / numeroCasillas;
  for (i=0; i<Math.pow(numeroCasillas, 2); i++){
    let div = document.createElement("div");
    
    div.addEventListener("mouseover", () => div.style.backgroundColor = "black");

    div.style.width = (`${anchoCasilla}px`);
    div.style.height = (`${anchoCasilla}px`);
    // div.textContent = i;
    contenedor.appendChild(div);
  }
}


