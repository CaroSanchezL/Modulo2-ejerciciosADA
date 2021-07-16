const esAnioNuevo = (fecha) => {
    let diaPrimero = parseInt(fecha.charAt(0)) === 0 && parseInt(fecha.charAt(1)) === 1;
    let mesPrimero = parseInt(fecha.charAt(3)) === 0 && parseInt(fecha.charAt(4)) === 1;
    
    return (diaPrimero && mesPrimero)
  }