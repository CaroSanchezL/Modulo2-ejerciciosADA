let temperatura = Number(prompt('Ingrese la temperatura'));

let azul = temperatura < 0;
let celeste = temperatura >= 0 && temperatura < 15;
let verde = temperatura >= 15 && temperatura < 25;
let amarillo = temperatura >= 25 && temperatura < 30;
let naranja = temperatura >= 30 && temperatura < 35;
let rojo = temperatura > 35;

const titulo = document.querySelector('h1')
titulo.textContent = `Temperatura actual: ${temperatura}°`;

if (azul) {
    titulo.style.color = 'blue';
} else if (celeste) {
    titulo.style.color = 'cyan';
} else if (verde) {
    titulo.style.color = 'green';
} else if (amarillo) {
    titulo.style.color = 'yellow';
} else if (naranja) {
    titulo.style.color = 'orange';
} else if (rojo) {
    titulo.style.color = 'red';
}
