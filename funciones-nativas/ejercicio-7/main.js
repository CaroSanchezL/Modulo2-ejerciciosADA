const esFraccionMayorAUno = (fraccion) => {
    let numerador = parseInt(fraccion.charAt(0));
    let denominador = parseInt(fraccion.charAt(2));
    return((numerador / denominador) > 1);
  }