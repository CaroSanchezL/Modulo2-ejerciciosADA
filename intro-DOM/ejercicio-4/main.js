
let size = prompt('Ingrese un tamaño de imagen: chica, mediana o grande');

const sizeMinusculas = size.toLowerCase();

let chica = (sizeMinusculas === 'chica');
let mediana = (sizeMinusculas === 'mediana');
let grande = (sizeMinusculas === 'grande');

let imagen = document.querySelector('img')

if (chica) {    
    imagen.style.width = '200px';
} else if (mediana) {
    imagen.style.width = '500px';
} else if (grande) {
    imagen.style.width = '800px';
} else {
    alert('Ingrese un tamaño válido')
}
