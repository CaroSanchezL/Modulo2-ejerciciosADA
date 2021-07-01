let montoDisponible = Number(prompt('¿Cuál es tu monto disponible?'));
let servicio1 = prompt('¿Cuál es el nombre del primer servicio?');
let montoServicio1 = Number(prompt('¿Cuál es el monto del primer servicio?'));
let servicio2 = prompt('¿Cuál es el nombre del segundo servicio?');
let montoServicio2 = Number(prompt('¿Cuál es el monto del segundo servicio?'));
let servicio3 = prompt('¿Cuál es el nombre del tercer servicio?');
let montoServicio3 = Number(prompt('¿Cuál es el monto del tercer servicio?'));

let saldoRestante = (montoDisponible - montoServicio1 - montoServicio2 - montoServicio3);

alert(`Los servicios a pagar son ${servicio1} de $${montoServicio1}, ${servicio2} de $${montoServicio2}, ${servicio3} de $${montoServicio3}, queda disponible un saldo de $${saldoRestante}`);