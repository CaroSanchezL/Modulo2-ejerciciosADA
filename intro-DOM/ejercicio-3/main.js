const rojo = prompt('Ingrese valor 1 de 3 del color RGB');
const verde = prompt('Ingrese valor 2 de 3 del color RGB');
const azul = prompt('Ingrese valor 3 de 3 del color RGB');

let body = document.querySelector('body');

body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`