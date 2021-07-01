let distancia = prompt('Ingresá la distancia del recorrido');

let resultadoEnBicicleta = (distancia/10);
let resultadoAPie = (distancia/5);
let resultadoEnAuto = (distancia/50);

alert(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`);