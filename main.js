function Calc(action, a, b) {
  // Errors 
  const isDevisibleByZero = (action === 'division' || action === 'remainder') && b === 0;

  if (isNotValidNumber(a) || isNotValidNumber(b)) { return 'Error' }

  if (isDevisibleByZero) { return 'cannot be divisible by 0' }

  // Actions
  switch (action) {
    case 'sum':
      return a + b;

    case 'minus':
      return a - b;

    case 'multiply':
      return a * b;

    case 'division':
      return a / b;

    case 'remainder':
      return a % b;

    case 'exponentiation':
      return a ** b;

    default:
      return 'unknown operator';
  }
}

function isNotValidNumber(num) {

  return (typeof num !== 'number' || num !== num || num === Infinity || num === -Infinity);

}

// Calc test
console.log(`
Errors: 
-----------------------
wrong action: ${Calc('zdorovki', 4, 2)}

a - str: ${Calc('sum', 'str', 2)}

b - Boolean: ${Calc('sum', 4, true)}

b - NaN: ${Calc('sum', 4, NaN)}

a - NaN: ${Calc('sum', NaN, 2)}

a - Infinity: ${Calc('sum', Infinity, 2)}

b - -Infinity: ${Calc('sum', 4, -Infinity)}

div/remainder by 0: ${Calc('remainder', 4, 0)}
-/---------------------


Actions: a = 5, b = 2
-----------------------
sum: ${Calc('sum', 5, 2)}

minus: ${Calc('minus', 5, 2)}

multiply: ${Calc('multiply', 5, 2)}

division: ${Calc('division', 5, 2)}

remainder: ${Calc('remainder', 5, 2)}

exponentiation: ${Calc('exponentiation', 5, 2)}
-/---------------------`);