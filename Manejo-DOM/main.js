// Hacela punto por punto. No trates de resolver todo a la vez.

// Vamos a crear una página para jugar a resolver una pregunta . Se espera que la misma:

// 1) Tenga dos span. El primero con una pregunta, o adivinanza. El segundo inicialmente estará vacío. Que tenga tres botones con posibles respuestas. 2) Al clickear la respuesta correcta, el botón debe ponerse de color verde 3) Una vez logrado 3, que ademas el texto del segundo span se actualice mostrando ¡Respuesta correcta!; 4) Una vez logrado el punto 3, si se clickea una respuesta incorrecta, se debe mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo. 5) Una vez logrado el punto 4, el texto del segundo span debe actualizarse mostrando ¡Respuesta equivocada!.

const spanVerificador = document.getElementById('verificador-respuesta');
const botonIncorrectoUno = document.getElementById('boton-incorrecta-uno');
const botonIncorrectoDos = document.getElementById('boton-incorrecta-dos');
const botonCorrecto = document.getElementById('boton-correcta');
let eventValue;


const respuesta = (event) => {
    eventValue = event.srcElement.id
    if (eventValue === 'boton-correcta') {
        botonCorrecto.classList.add('verde');
        spanVerificador.textContent = '¡Respuesta correcta!';
        botonIncorrectoUno.classList.remove('rojo');
        botonIncorrectoDos.classList.remove('rojo');
    } else if (eventValue === 'boton-incorrecta-uno') {
        botonIncorrectoUno.classList.add('rojo');
        spanVerificador.textContent = '¡Respuesta equivocada!';
        botonIncorrectoDos.classList.remove('rojo');
        botonCorrecto.classList.remove('verde');
    } else if (eventValue === 'boton-incorrecta-dos') {
        botonIncorrectoDos.classList.add('rojo');
        spanVerificador.textContent = '¡Respuesta equivocada!';
        botonIncorrectoUno.classList.remove('rojo');
        botonCorrecto.classList.remove('verde');
    }
}

    botonCorrecto.onclick = respuesta;
    botonIncorrectoUno.onclick = respuesta;
    botonIncorrectoDos.onclick = respuesta;