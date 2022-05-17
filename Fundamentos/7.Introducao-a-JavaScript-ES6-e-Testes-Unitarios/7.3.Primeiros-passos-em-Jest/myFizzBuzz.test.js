const myFizzBuzz = require('./myFizzBuzz');

describe('number divisible by 3 and 5', () => {
  test("number divisible by 3 and 5 must return 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it("number divisible only by 3 must return 'fizz'", () => {
    expect(myFizzBuzz(9)).toStrictEqual('fizz');
  });
  it("number divisible only by 5 must return 'buzz'", () => {
    expect(myFizzBuzz(10)).toStrictEqual('buzz');
  });
  it('number not divisible by 3 and 5 must return itself', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });
  it('not a number', () => {
    expect(myFizzBuzz('4')).toEqual(false);
  });
});
