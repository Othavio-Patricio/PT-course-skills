const sum = require('./sum');

describe('sum of two numbers', () => {
  test('sum of 4 and 5 to expect 9 as result', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('sum of 0 and 0 to expect 0 as result', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("sum of 4 and '5' to throw error", () => {
    expect(() => { sum(4, '5') }).toThrow(Error);
  });
  it("sum of 4 and '5' to throw error message 'parameters must be numbers'", () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});