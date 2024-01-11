function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let dupes = [];
  for (let i = 0; i < array.length; i++) {
    dupes.push(array[i] * 2);
  }
  return dupes;
}

console.log(duplicarElementos([0, 8, 16]));

module.exports = duplicarElementos;
