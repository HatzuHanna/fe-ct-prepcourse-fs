function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var isMultipleOf3 = num % 3 == 0;
  var isMultipleOf5 = num % 5 == 0;
  if (isMultipleOf3 && isMultipleOf5) {
    return "fizzbuzz";
  }
  if (isMultipleOf3) {
    return "fizz";
  }
  if (isMultipleOf5) {
    return "buzz";
  }

  return false;
}

module.exports = fizzBuzz;
