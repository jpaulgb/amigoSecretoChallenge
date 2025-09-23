// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo)

    if ( nuevoAmigo === "") {
    alert('Por favor, inserte un nombre.');
    } amigos.push(nuevoAmigo)
    console.log(amigos)
    // Limpiar input
    limpiarCaja()
};

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

let nombre = document.getElementById('listaAmigos')
nombre.innerHTML = "Nombre agregado manualmente TEMPORAL"


/* let resultado = document.getElementById('resultado')
nombre.innerHTML = "El ganador es: nombre agregado manualmente TEMPORAL" */



