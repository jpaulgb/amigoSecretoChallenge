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
};

//document.getElementById('amigo') = amigo.innerHTML = "";

let nombre = document.getElementById('listaAmigos')
nombre.innerHTML = "Nombre agregado manualmente TEMPORAL"


/* let resultado = document.getElementById('resultado')
nombre.innerHTML = "El ganador es: nombre agregado manualmente TEMPORAL" */

//validación de que el campo no esta vacio

