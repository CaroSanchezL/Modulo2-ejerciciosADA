const esElUltimoCaracter = (palabra, caracter) => {
    let posicionUltimoCaracter = palabra.length - 1;
    return palabra.charAt(posicionUltimoCaracter) === caracter
  }