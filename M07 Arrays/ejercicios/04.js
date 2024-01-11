function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  let rando = Math.floor(Math.random() * array.length);
  return array[rando];
  // if (array.length == 0) {
  //   return;
  // }
  // let index = Math.floor(Math.random(0, array.length));
  // console.log(index);
  // return array[index];
}
console.log(obtenerElementoAleatorio([4, 7, 8, 0, 1]));
module.exports = obtenerElementoAleatorio;
