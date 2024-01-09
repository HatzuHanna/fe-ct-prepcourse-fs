function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  if (n <= 0) {
    return 0;
  }
  // let suma = 0;
  // var i = 1;
  // for (;;) {
  //   if (i > n) {
  //     break;
  //   }
  //   suma += i;
  //   if (suma >= 100) {
  //     break;
  //   }
  //   i++;
  // }
  // return suma;

  let suma = 0;
  for (let i = 1; i <= n && suma < 100; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumarHastaNConBreak(15));
module.exports = sumarHastaNConBreak;
