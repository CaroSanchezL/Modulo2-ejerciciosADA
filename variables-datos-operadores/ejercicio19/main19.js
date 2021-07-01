let cantidadDosPersonas = Number(prompt('Ingresá cuantas habitaciones para dos personas tiene el hotel'));
let cantidadTresPersonas = Number(prompt('Ingresá cuantas habitaciones para tres personas tiene el hotel'));
let cantidadCuatroPersonas = Number(prompt('Ingresá cuantas habitaciones para cuatro personas tiene el hotel'));

let resultado = ((cantidadDosPersonas*2) + (cantidadTresPersonas*3) + (cantidadCuatroPersonas*4));

alert (`El hotel tiene una capacidad de ${resultado} personas`);