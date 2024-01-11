function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let max = -Number.MAX_VALUE;
  let indexOfMax = 0;
  console.log(max);
  if (array.length == 1) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    let valor = array[i];
    if (valor < max) {
      continue;
    }
    max = valor;
    indexOfMax = i;
    // console.log(array[i]);
    console.log(`Este es el index ${i} estes es el mas grande ${array[i]}`);
  }
  return indexOfMax;
}
console.log(encontrarIndiceMayor([1, 2, 3, 4, 5]));
module.exports = encontrarIndiceMayor;
