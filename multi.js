const multi = (a,b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else if (typeof a === 'number' && typeof b === 'undefined') {
    return a;
  }

  return 'NIEPOPRAWNE PARAMETRY';
}

console.log('method MULTI should correct multi two numbers', multi(10,5) === 50);
console.log('method MULTI should display single param', multi(5) === 5);
console.log('method MULTI should return string if first param isnt number', multi('5', 5) === 'NIEPOPRAWNE PARAMETRY');
console.log('method MULTI should return string if  params arent number', multi('5', '5') === 'NIEPOPRAWNE PARAMETRY');
console.log('method MULTI should return string if second params isnt number', multi(5, '5') === 'NIEPOPRAWNE PARAMETRY');
console.log('method MULTI should return string if not params', multi() === 'NIEPOPRAWNE PARAMETRY');