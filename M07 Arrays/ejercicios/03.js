function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

  console.log(Math.random());
  for (i = 0; i <= array.length; i++) {
    if (elemento === array[i]) {
      return i;
    }
  }
  return -1;
}
console.log(encontrarElemento(2, [2, 2, 2]));
module.exports = encontrarElemento;
