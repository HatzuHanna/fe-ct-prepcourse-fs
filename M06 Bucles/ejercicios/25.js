const invertirTexto = require("./24");

function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  string = string.replaceAll(" ", "").toLowerCase();
  console.log(string);

  return string == invertirTexto(string);
}

esPalindromo("La ruta nos aporto otro paso natural");
module.exports = esPalindromo;
