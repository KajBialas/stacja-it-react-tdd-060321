const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'undefined') {
    return a;
  }

  return 'NIEPOPRAWNE PARAMETRY';
};


console.log('method ADD should correct add two numbers', add(5,5) === 10);
console.log('method ADD should display single param', add(5) === 5);
console.log('method ADD should return string if first param isnt number', add('5', 5) === 'NIEPOPRAWNE PARAMETRY');
console.log('method ADD should return string if  params arent number', add('5', '5') === 'NIEPOPRAWNE PARAMETRY');
console.log('method ADD should return string if second params isnt number', add(5, '5') === 'NIEPOPRAWNE PARAMETRY');
console.log('method ADD should return string if not params', add() === 'NIEPOPRAWNE PARAMETRY');