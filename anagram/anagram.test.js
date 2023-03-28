const anagram = require('./anagram');

describe('Anagram', () => {
  it('should be a function', () => {
    expect(typeof anagram).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });

  it('should return true if strings passed are anagrams', () => {
    expect(anagram('ram', 'arm')).toBeTruthy();
    expect(anagram('one', 'neo')).toBeTruthy();
  });

  it('should return false if strings passed are not anagrams', () => {
    expect(anagram('ram', 'arms')).toBeFalsy();
    expect(anagram('one', 'theo')).toBeFalsy();
  });
});
