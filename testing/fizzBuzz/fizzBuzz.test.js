const fizzBuzz = require('./fizzBuzz');

describe('fizzbuzz', () => {
  it('should be a funciton', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });

  it('should return the number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(17)).toEqual(17);
  });

  it('should return the Fizz if divisible by 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it('should return the Buzz if divisible by 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it('should return the FizzBuzz if divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
});
