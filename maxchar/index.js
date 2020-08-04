// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// SOLUTION 1
function maxChar(str) {
    const obj = {};
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    const sortValues = Object.entries(obj).sort((a, b) => b - a);
    return sortValues[0][0];
}

// SOLUTION 2
function maxChar(str) {
    const obj = {};
    let max = 0;
    let result = null;

    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

  for(let char in obj) {
      if(obj[char] > max) {
          max = obj[char];
          result = char;
      }
  }

  return result;
}

module.exports = maxChar;
