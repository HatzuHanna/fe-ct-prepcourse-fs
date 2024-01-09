function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (n < 0) {
    return 0;
  }
  let suma = 0;
  // for (let i = 1; i <= n; i++) {
  for (let i = n; i >= 1; i--) {
    suma += i;
  }
  return suma;
  // if (n <= 0) {
  //   return 0;
  // }
  // return sumarHastaN(n - 1) + n;
}

module.exports = sumarHastaN;
