function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayores = 0;

  for (let i = 0; i < array.length; i++) {
    if (array.length == 0) {
      return;
    }
    if (array[i] > 10) {
      // mayores.push(array[i]);
      mayores++;
    }
  }
  return mayores;
}

console.log(contarElementosMayoresA10([10, 20, 30, 40, 50]));

module.exports = contarElementosMayoresA10;
