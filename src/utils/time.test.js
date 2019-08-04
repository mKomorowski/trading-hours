import {
  displayTimeUnit,
  createDateFromTimeUnits,
} from './time';

describe('time utilites', () => {
  describe('displayTimeUnit', () => {
    it('should return 01 when given 1', () => {
      expect(displayTimeUnit(1)).toBe('01');
    });

    it('should return 10 when given 10', () => {
      expect(displayTimeUnit(10)).toBe('10');
    });
  })

  describe('createDateFromTimeUnits', () => {
    it('should return date object', () => {
      const result = createDateFromTimeUnits(10, 5);

      expect(result instanceof Date).toBe(true);
    })

    it('should return date with correct units set', () => {
      const result = createDateFromTimeUnits(10, 5);

      expect(result.getHours()).toBe(10);
      expect(result.getMinutes()).toBe(5);
      expect(result.getSeconds()).toBe(0);
    })
  })
});
