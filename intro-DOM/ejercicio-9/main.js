const animalUsuario = prompt('Ingrese un animal entre estas opciones: ardilla, cerdo, tigre');

const ardilla = animalUsuario === 'ardilla';
const cerdo = animalUsuario === 'cerdo';
const tigre = animalUsuario === 'tigre';

if (ardilla) {
    const animalUno = document.getElementById("animal1");
    animalUno.style.visibility = 'visible';
} else if (cerdo) {
    const animalDos = document.getElementById('animal2');
    animalDos.style.visibility= 'visible';
} else if (tigre) {
    const animalTres = document.getElementById('animal3');
    animalTres.style.visibility = 'visible';
}