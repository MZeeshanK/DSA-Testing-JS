const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a type of function', () => {
    expect(typeof palindrome).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof palindrome('what')).toEqual('boolean');
  });

  it('should only return true when string passed is a palindrome', () => {
    expect(palindrome('racecar')).toEqual(true);
    expect(palindrome('wow')).toEqual(true);
    expect(palindrome('wow')).toBeTruthy();
  });

  it('should only return false when string passed is not a palindrome', () => {
    expect(palindrome('what')).toEqual(false);
    expect(palindrome('hello')).toEqual(false);
    expect(palindrome('tar')).toBeFalsy();
  });

  it('should return false if includes spaces', () => {
    expect(palindrome('r acecar')).toEqual(false);
    expect(palindrome('w ow')).toEqual(false);
    expect(palindrome('wo w')).toBeFalsy();
  });
});
