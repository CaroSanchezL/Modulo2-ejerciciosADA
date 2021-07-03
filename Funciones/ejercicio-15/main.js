const restarPorcentaje = (numero, porcentaje) => {
    let resultadoPorcentaje = (numero/100) * porcentaje;
    return(numero - resultadoPorcentaje);
};