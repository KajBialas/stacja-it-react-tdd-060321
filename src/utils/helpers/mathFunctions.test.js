import { add, sub } from './mathFunctions';

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

    it('should return string if first param isnt number', () => {
      const result = add('5', 5);
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });

    it('should return string if second param isnt number', () => {
      const result = add(5, '5');
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });

    it('should return string if params arent number', () => {
      const result = add('5', '5');
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });
  });

  describe('method SUB()', () => {
    it('should correct sub two numbers', () => {
      const result = sub(10,5);
      const expectedResult = 5;

      expect(result).toBe(expectedResult);
    });

    it('should return number for single param', () => {
      const result = sub(5);
      const expectedResult = 5;

      expect(result).toBe(expectedResult);
    });

    it('should return string for non params', () => {
      const result = sub();
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });

    it('should return string if first param isnt number', () => {
      const result = sub('5', 5);
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });

    it('should return string if second param isnt number', () => {
      const result = sub(5, '5');
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });

    it('should return string if params arent number', () => {
      const result = sub('5', '5');
      const expectedResult = 'NIEPOPRAWNY PARAMETR';

      expect(result).toBe(expectedResult);
    });
  });
});