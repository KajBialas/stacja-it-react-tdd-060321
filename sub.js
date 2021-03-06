const sub = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (typeof a === 'number' && typeof b === 'undefined') {
    return a;
  }

  return 'NIEPOPRAWNE PARAMETRY';
};

console.log('method SUB should correct sub two numbers', sub(10,5) === 5);
console.log('method SUB should display single param', sub(5) === 5);
console.log('method SUB should return string if first param isnt number', sub('5', 5) === 'NIEPOPRAWNE PARAMETRY');
console.log('method SUB should return string if  params arent number', sub('5', '5') === 'NIEPOPRAWNE PARAMETRY');
console.log('method SUB should return string if second params isnt number', sub(5, '5') === 'NIEPOPRAWNE PARAMETRY');
console.log('method SUB should return string if not params', sub() === 'NIEPOPRAWNE PARAMETRY');