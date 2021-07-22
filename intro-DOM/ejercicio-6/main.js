let progreso = (prompt('Ingrese un porcentaje de progreso en números'));

const barra = document.getElementById('barra');

let dentroDeRango = (progreso >= 0 && progreso <= 100);
let bajoRango = (progreso < 0);
let sobreRango = (progreso > 100)

if (dentrodeRango) {
    barra.style.width = `${progreso}%`;
} else if (bajoRango) {
    barra.style.width = '0%';
} else if (sobreRango) {
    barra.style.width = '100%'
}