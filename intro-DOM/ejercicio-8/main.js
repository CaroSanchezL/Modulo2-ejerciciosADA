const tituloUsuario = prompt ('Ingrese un título para la card');
const urlImagen = prompt('Ingrese URL de la imagen');
const urlArticulo = prompt('Ingrese URL del artículo');

const titulo = document.querySelector('.card > h1');
titulo.textContent = tituloUsuario;

const imagen = document.querySelector('.card > img');
imagen.src = urlImagen;

const link = document.querySelector('.card > a');
link.href = urlArticulo;