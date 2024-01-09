function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  if (typeof num != "number") {
    return 0;
  }
  let i = 1;
  do {
    num += 5;
    i++;
    console.log(num);
  } while (i <= 8);
  return num;
}

doWhile(5);
module.exports = doWhile;
