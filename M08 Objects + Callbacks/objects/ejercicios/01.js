function obtenerValorPropiedad(objeto, propiedad) {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  let propiedades = propiedad.split(".");
  for (let i = 0; i < propiedades.length; i++) {
    objeto = objeto[propiedades[i]];
  }
  return objeto;
}

module.exports = obtenerValorPropiedad;
