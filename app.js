// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo)

    if ( nuevoAmigo === "") {
    alert('Por favor, inserte un nombre.');
    return
    }
    
    amigos.push(nuevoAmigo)
    console.log(amigos)
    // Limpiar input
    limpiarCaja()
    recorreAmigos()
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function recorreAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        if (amigo !== "") {
            lista.innerHTML += `<li>${amigo}</li>`;
        }
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
    alert('Incluya por lo menos un nombre');
    } else {
         seleccionAleatoria()
    }   
}

//Obtener nombre sorteado
//let numeroSecreto = generarNumeroSecreto();

let dos = "2";

let nombre = document.getElementById('resultado')
nombre.innerHTML = `Su amigo secreto es: ${dos}`;


function seleccionAleatoria(){
    console.log(Math.floor(Math.random()*amigos.length)+1);  
}


