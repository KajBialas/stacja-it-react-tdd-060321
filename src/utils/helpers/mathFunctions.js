export const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'undefined') {
    return a;
  }
  return 'NIEPOPRAWNY PARAMETR';
};

export const sub = (a,b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (typeof a === 'number' && typeof b === 'undefined') {
    return a;
  }

  return 'NIEPOPRAWNY PARAMETR';
}