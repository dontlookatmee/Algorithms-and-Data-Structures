// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
function reverse(str) {
    return str.split('').reverse().join('')
}

// SOLUTION 2
function reverse(str) {
    let reversedStr = '';

    for(let i = 0; i < str.length; i++) {
        reversedStr = str[i] + reversedStr;
    }

    return reversedStr;
}

module.exports = reverse;
