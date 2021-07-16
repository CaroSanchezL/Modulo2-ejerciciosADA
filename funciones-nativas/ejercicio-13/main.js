const obtenerExtension = (archivo) => {
    let posicionPunto = archivo.indexOf('.', 0);
    return(archivo.slice(posicionPunto + 1))
  }