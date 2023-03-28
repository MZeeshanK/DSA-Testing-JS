const reverseString = require('./reverseString');
describe('Reverse String', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return the reverse of the string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('world')).toEqual('dlrow');
    expect(reverseString('racecar')).toEqual('racecar');
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });
});
