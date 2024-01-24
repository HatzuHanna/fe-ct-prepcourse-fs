/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let propertyNames = Object.keys(objeto);
  let resultado = [];
  for (let i = 0; i < propertyNames.length; i++) {
    let propertyName = propertyNames[i];
    let propertyValue = objeto[propertyName];
    let keyValuePair = [propertyName, propertyValue];

    resultado.push(keyValuePair);
  }
  return resultado;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let resultado = {};

  let characters = string.split("");
  characters.sort();
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (resultado.hasOwnProperty(character)) {
      resultado[character]++;
    } else {
      resultado[character] = 1;
    }
  }
  return resultado;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let resultado = [];
  let characters = string.split("");

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (character == character.toUpperCase()) {
      resultado.push(character);
    }
  }
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (character != character.toUpperCase()) {
      resultado.push(character);
    }
  }
  return resultado.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let words = frase.split(" ");
  let resultado = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = word.split("").reverse().join("");

    resultado.push(reversedWord);
  }
  return resultado.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let string = numero.toString();
  let stringReversed = string.split("").reverse().join("");
  if (string == stringReversed) {
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let resultado = [];
  let characters = string.split("");

  for (i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (character == "a" || character == "b" || character == "c") {
      continue;
    }
    resultado.push(character);
  }
  return resultado.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.slice().sort(CompareStringsByLength);
  //or
  return arrayOfStrings.slice().sort((a, b) => a.length - b.length);
}
function CompareStringsByLength(a, b) {
  return a.length - b.length;
}
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let duplicates = [];
  for (let i = 0; i < array1.length; i++) {
    let element1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      let element2 = array2[j];
      if (element1 != element2) {
        continue;
      }
      duplicates.push(element1);
    }
  }
  return duplicates;
}
var a = 3;
var b = "3";

var resultado = a == b;

console.log(3 > 2 > 1);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
