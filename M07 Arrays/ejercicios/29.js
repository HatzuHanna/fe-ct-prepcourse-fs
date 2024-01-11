function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length < 2) {
    return null;
  }

  for (let i = 1; i < numeros.length; i++) {
    let actual = numeros[i];
    let anterior = numeros[i - 1];
    let esperado = anterior + 1;
    if (esperado != actual) {
      return esperado;
    }
  }
  return null;
}
console.log(encontrarNumeroFaltante([1, 2, 3, 4, 6, 7, 8, 9]));
module.exports = encontrarNumeroFaltante;
