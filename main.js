function Calc(action, a, b) {
  const isNotValid = isNotValidCalc(action, a, b)

  if (isNotValid) { return isNotValid }

  if (action == 'sum') { return a + b }

  else if (action == 'minus') { return a - b }

  else if (action == 'multiply') { return a * b }

  else if (action == 'division') { return a / b }

  else if (action == 'remainder') { return a % b }

  else if (action == 'exponentiation') { return a ** b }

  return 'unknown operator'
}

function isNotValidCalc(action, a, b) {
  // check a and b - numbers and not a NaN or Infinity
  const isNotValidNumbers = typeof a !== 'number' || typeof b !== 'number' ||
    a !== a || b !== b ||
    a === Infinity || a === -Infinity ||
    b === Infinity || b === -Infinity;

  if (isNotValidNumbers) { return 'Error' }

  //check divisible by 0
  if ((action === 'division' || action === 'remainder') && b === 0) {
    return 'cannot be divisible by 0'
  }

  return false
}



console.log(`\n
errors: \n
wrong action: ${Calc('zdorovki', 4, 2)}\n
a - str: ${Calc('sum', 'str', 2)}\n
b - Boolean: ${Calc('sum', 4, true)}\n
b - NaN: ${Calc('sum', 4, NaN)}\n
a - NaN: ${Calc('sum', NaN, 2)}\n
a - Infinity: ${Calc('sum', Infinity, 2)}\n
b - -Infinity: ${Calc('sum', 4, -Infinity)}\n
divisible and remainder by 0: ${Calc('remainder', 4, 0)}\n
\n
actions: a = 5, b = 2\n
sum: ${Calc('sum', 5, 2)}\n
minus: ${Calc('minus', 5, 2)}\n
multiply: ${Calc('multiply', 5, 2)}\n
division: ${Calc('division', 5, 2)}\n
remainder: ${Calc('remainder', 5, 2)}\n
exponentiation: ${Calc('exponentiation', 5, 2)}\n
`);