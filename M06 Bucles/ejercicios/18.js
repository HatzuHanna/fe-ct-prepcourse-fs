function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a > b || a < 0) {
    return 0;
  }

  let producto = a;

  for (let i = a + 1; i <= b; i++) {
    producto *= i;
  }

  return producto;
}

module.exports = productoEntreNúmeros;
