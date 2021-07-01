let escalaUno = prompt('¿Cuál es la primer escala?');
let duracionEscalaUno = Number(prompt ('¿Cuál es la duración de la primer escala?'));
let escalaDos = prompt('¿Cuál es la segunda escala?');
let duracionEscalaDos = Number(prompt('¿Cuál es la duración de la segunda escala?'));
let escalaTres = prompt('¿Cuál es la tercer escala?');
let duracionEscalaTres = Number(prompt(`¿Cuál es la duración de la tercer escala?`));

let resultado = (duracionEscalaUno + duracionEscalaDos + duracionEscalaTres);

alert (`La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscalaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs`);