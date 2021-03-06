const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'undefined') {
    return a;
  }
  return 'NIEPOPRAWNY PARAMETR';
};

console.log('method ADD should correct add two numbers', add(5,5) === 10);
console.log('method ADD should return number for single param', add(5) === 5);
console.log('method ADD should return string for wrong param', add('5') === 'NIEPOPRAWNY PARAMETR');
console.log('method ADD should return string for wrong param', add(5, '5') === 'NIEPOPRAWNY PARAMETR');
console.log('method ADD should return string for wrong param', add() === 'NIEPOPRAWNY PARAMETR');
