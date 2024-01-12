function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  const objetoNuevo = Object.assign({}, objeto);

  objetoNuevo[propiedad] = valor;
  return objetoNuevo;
}

module.exports = actualizarValorPropiedad;
