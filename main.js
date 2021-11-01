function calc(action, a, b) {
  //Errors 
  const isDevisibleByZero = (action === 'division' || action === 'remainder') && b === 0;

  if (isNotValidNumber(a) || isNotValidNumber(b)) { return 'Error' }

  if (isDevisibleByZero) {
    return 'cannot be divisible by 0'
  }

  //Actions
  if (action == 'sum') { return a + b }

  else if (action == 'minus') { return a - b }

  else if (action == 'multiply') { return a * b }

  else if (action == 'division') { return a / b }

  else if (action == 'remainder') { return a % b }

  else if (action == 'exponentiation') { return a ** b }

  else { return 'unknown operator' }
}

function isNotValidNumber(num) {

  return (typeof num !== 'number' || num !== num || num === Infinity || num === -Infinity);

}

console.log(`
Errors: 

wrong action: ${calc('zdorovki', 4, 2)}

a - str: ${calc('sum', 'str', 2)}

b - Boolean: ${calc('sum', 4, true)}

b - NaN: ${calc('sum', 4, NaN)}

a - NaN: ${calc('sum', NaN, 2)}

a - Infinity: ${calc('sum', Infinity, 2)}

b - -Infinity: ${calc('sum', 4, -Infinity)}

divisible and remainder by 0: ${calc('remainder', 4, 0)}



Actions: a = 5, b = 2

sum: ${calc('sum', 5, 2)}

minus: ${calc('minus', 5, 2)}

multiply: ${calc('multiply', 5, 2)}

division: ${calc('division', 5, 2)}

remainder: ${calc('remainder', 5, 2)}

exponentiation: ${calc('exponentiation', 5, 2)}

`);