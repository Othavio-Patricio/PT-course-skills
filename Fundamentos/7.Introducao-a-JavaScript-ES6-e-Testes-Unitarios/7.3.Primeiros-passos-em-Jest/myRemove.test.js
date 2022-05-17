const myRemove = require('./myRemove');

describe('Remove item from array', () => {
  const array = [1, 2, 3, 4];
  test('reciving the array [1, 2, 3, 4] and the number 3, must return [1, 2, 4]', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });
  it('reciving the array [1, 2, 3, 4] and the number 3, must not return [1, 2, 3, 4]', () => {
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('reciving the array [1, 2, 3, 4] and the number 5, must return [1, 2, 3, 4]', () => {
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });
});