// Rotate the String k Times in the Left Direction
// Write a function that will take a string and a number as input parameters.

// let string = "javascript"
// let n = 2

// According to the above input, the given string should be rotated two times in the left direction. Following should be the output.

// "vascriptja”

// When n = 2, the first two characters - “ja” are removed and added to the end, thus rotating the string to the left two times.

const rotateString = function (str, num) {
  const n = num % str.length;
  return str.slice(n) + str.slice(0, n);
};

console.log(rotateString("javascript", 2));