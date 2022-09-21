const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decir");
const reset = document.getElementById("reset");

let numero =0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
    if (numero==0){
        document.getElementById("contar").style.color = "blue";
    }
    else if (numero>0) {
        document.getElementById("contar").style.color = "green";
    }
});

restar.addEventListener("click", () =>{
    numero--;
    contador.innerHTML = numero;
    if (numero==0){
        document.getElementById("contar").style.color = "blue";
    }
    else if (numero<0){
        document.getElementById("contar").style.color = "red";
    }
});

reset.addEventListener("click", ()=>{
    numero = 0,
    contador.innerHTML = numero;
    document.getElementById("contar").style.color = "blue";
});