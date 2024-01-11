function agregarNumeros(array) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumaArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumaArray += array[i];
  }
  return sumaArray;
}

module.exports = agregarNumeros;
