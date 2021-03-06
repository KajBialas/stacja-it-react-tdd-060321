import { add } from './mathFunctions';

describe('mathFunctions.js', () => {
  describe('method ADD()', () => {
    it('should correct add two numbers', () => {
      const result = add(5,5);
      const expectedResult = 10;

      expect(result).toBe(expectedResult);
    });

    it('should return number for single param', () => {
      const result = add(5);
      const expectedResult = 5;

      expect(result).toBe(expectedResult);
    });

    it('should return string for non params', () => {
      const result = add();
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });
  });
});