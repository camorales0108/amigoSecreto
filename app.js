// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let input = document.querySelector('#amigo');
let lista = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');

let asignarMensaje = (texto) =>{
   resultado.textContent = texto;
}


let limpiarCaja = () => {
    amigo.value = '';
}

let agregarAmigo = () => {
    let amigo = input.value.trim();

    if(amigo == ""){
        alert('Ingrese un nombre...');

    }else{
        nombres.push(amigo);  
        
        let elementoLi = document.createElement("li");
        elementoLi.textContent = amigo;

        lista.appendChild(elementoLi);    
    }

    limpiarCaja();
}


let sortearAmigo = () => {
    tamañoLista = nombres.length;

    if( tamañoLista === 0){
       asignarMensaje('Ya se sortearón todos los amigos');
    }else{
        let amigoAleatorio = Math.floor(Math.random()*tamañoLista);
        let amigoSorteado = nombres.splice(amigoAleatorio, 1)[0];

       asignarMensaje(amigoSorteado);
    }
}