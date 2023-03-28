const reverseString = (str) => {
  // Solution 1
  //   return str.split('').reverse().join('');
  // Solution 2
  //   let reversed = '';

  //   for (let char of str) {
  //     reversed = char + reversed;
  //   }
  //   return reversed;
  // solution 3
  return str.split('').reduce((reversed, char) => char + reversed, '');
};

module.exports = reverseString;
