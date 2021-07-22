const cantidadMeGusta = prompt('Ingrese cantidad de "me gusta"');
const cantidadMeEncanta = prompt('Ingrese cantidad de "me encanta"');
const cantidadMeAsombra = prompt('Ingrese cantidad de "me asombra"');

let meGusta = document.getElementById('me-gusta');
meGusta.textContent = `👍 ${cantidadMeGusta}`;

let meEncanta = document.getElementById('me-encanta');
meEncanta.textContent = `❤️ ${cantidadMeEncanta}`;

let meAsombra = document.getElementById('me-asombra');
meAsombra. textContent = `😮 ${cantidadMeAsombra}`

// 👍 0
// ❤️ 0
// 😮 0