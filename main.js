function Calc(action, a, b) {
  if (typeof a != 'number' || typeof b != 'number') { return 'Error' }
  else if (action == 'sum') { return sum(a, b) }
  else if (action == 'minus') { return minus(a, b) }
  else if (action == 'multiply') {return multiply(a, b)}
  else if (action == 'division') {return division(a, b)}
  else if (action == 'remainder') {return remainder(a, b)}
  else if (action == 'exponentiation') {return exponentiation(a, b)}
  return 'unknown operator';
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function exponentiation(a, b) {
  return a ** b;
}

console.log(`\n
errors: \n
${Calc('zdorovki', 4, 2)}\n
${Calc('sum', 'str', 2)}\n
${Calc('sum', 4, true)}\n
\n
actions: a = 4, b = 2\n
sum: ${Calc('sum', 4, 2)}\n
minus: ${Calc('minus', 4, 2)}\n
multiply: ${Calc('multiply', 4, 2)}\n
division: ${Calc('division', 4, 2)}\n
remainder: ${Calc('remainder', 4, 2)}\n
exponentiation: ${Calc('exponentiation', 4, 2)}\n
`);