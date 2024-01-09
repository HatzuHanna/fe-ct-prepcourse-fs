function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:""
  // var str = `${num}`;
  // console.log(str.length);
  // if (str.length == 3) {
  //   return true;
  // }
  // return false;
  // return str.length == 3;
  return num > 99 && num < 1000;
}
console.log(tieneTresDigitos(13));
module.exports = tieneTresDigitos;
