function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      console.log("sii");
      return array[i];
    }
  }
  return;
}
console.log(
  obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "test"])
);
module.exports = obtenerPrimerStringLargo;
