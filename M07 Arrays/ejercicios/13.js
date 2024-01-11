function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  if (resultadosTest.length == 0) {
    return;
  }
  let sumaNotas = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    sumaNotas += resultadosTest[i];
  }
  return sumaNotas / resultadosTest.length;
}

console.log(promedioResultadosTest([0, 2, 6], "sda"));
module.exports = promedioResultadosTest;
