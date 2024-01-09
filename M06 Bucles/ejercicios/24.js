function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // if (typeof texto !== "string") {
  //   return 0;
  // }
  // return texto.split("").reverse().join("");

  let reverso = [...texto];
  let final = [];
  for (i = reverso.length - 1; i >= 0; i--) {
    final.push(reverso[i]);
  }
  return final.join("");
}

module.exports = invertirTexto;
