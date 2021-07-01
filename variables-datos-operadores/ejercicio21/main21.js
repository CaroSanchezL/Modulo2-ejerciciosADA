let cantidadDeMouse = Number(prompt('Ingresá la cantidad de mouse que deseas comprar'));
let cantidadDeTeclados = Number(prompt('Ingresá la cantidad de teclados que deseas comprar'));
let cantidadAuriculares = Number(prompt('Ingresá la cantidad de auriculares que deseas comprar'));
let cuotas = Number(prompt('Ingresá la cantidad de cuotas'));

let precioTotalDeMouse = (cantidadDeMouse*400);
let precioTotalDeTeclados = (cantidadDeTeclados*800);
let precioTotalAuriculares = (cantidadAuriculares*1500);

let precioTotal = (precioTotalDeMouse+precioTotalDeTeclados+precioTotalAuriculares);

let precioPorCuota = (precioTotal/cuotas);

alert(`El detalle de la compra es: mouse ${cantidadDeMouse} x $ 400 $ ${precioTotalDeMouse}, teclado ${cantidadDeTeclados} x $ 800 $ ${precioTotalDeTeclados}, auriculares ${cantidadAuriculares} x $ 1500 $ ${precioTotalAuriculares}. El total es $ ${precioTotal} en ${cuotas} cuotas de $ ${precioPorCuota}`);