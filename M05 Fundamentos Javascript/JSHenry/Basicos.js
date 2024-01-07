var cajon;

cajon = 5 + 5;

// old way
console.log("el valor de cajon es: " + cajon);
//  string interpolado AKA MEJOR
console.log(`el valor de cajon es: ${cajon}`);

console.log("soy un log");

//tarea
var cajonespar = cajon % 2 == 0;

console.log(`${cajon} es par? ${cajonespar}`);

//funciones
function sumaTresOG(x) {
  console.log(x + 3);
}

//RETURNS

function sumaTres(x) {
  return x + 3;
}

cajon = sumaTres(5);
console.log(cajon);
cajon = sumaTresOG(5);
console.log(cajon);

//RETURN TAREA

function esPar(num) {
  return num % 2 == 0;
}

esPar(13);
esPar(12);

function sacarPromedio(x, y) {
  return (x + y) / 2;
}

console.log(sacarPromedio(7, 2));
