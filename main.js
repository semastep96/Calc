function Calc(operator, a, b) {

  const isDevisibleByZero = (operator === 'div' || operator === 'rem') && b === 0;

  const operations = {
    sum: a + b,
    sub: a - b,
    mult: a * b,
    div: a / b,
    rem: a % b,
    exp: a ** b,
  }

  // Errors 
  if (isNotValidNumber(a) || isNotValidNumber(b)) { return 'Error' }

  if (isDevisibleByZero) { return 'cannot be divisible by 0' }

  if (!operations[operator]) {return 'unknown operator'}

  // Actions
  
  return operations[operator]
  
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

div/rem by 0: ${Calc('rem', 4, 0)}
-/---------------------


Actions: a = 5, b = 2
-----------------------
sum: ${Calc('sum', 5, 2)}

sub: ${Calc('sub', 5, 2)}

mult: ${Calc('mult', 5, 2)}

div: ${Calc('div', 5, 2)}

rem: ${Calc('rem', 5, 2)}

exp: ${Calc('exp', 5, 2)}
-/---------------------`);