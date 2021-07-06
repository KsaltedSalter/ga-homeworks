/* eslint-disable no-unused-vars */

// ? Below is a demo function to practice running the automated tests.
// ? add the statement 'return []' to the function, save the file.
// ? Run the tests with the command inside your terminal 'npm run test'
// ? You should now see this demo test passing in the ouput report
function demo(array) {
  return [];
}

// ? using `filter` write a function which returns all the string elements in an array
// ? eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

// const findStrings = [10, "Mike", "23", NaN, "elephant"];

// const findWords = findStrings.filter(stringsOnly);

function stringsOnly(array) {}

// ? using `map` write a function that converts an array of farenheit values to celcius
// ? eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

const temp = [23, 140, 212, 41];

const mapTemps = temp.map(convertTemps);

function convertTemps(array) {
  return (array - 32) * (5 / 9);
}

console.log(mapTemps);

// ? using `map` write a function that returns the total number of characters of each character in an array of words
// ? eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => [4, 6, 4, 7]

const count = ["Stay", "hungry", "stay", "foolish"];

const charCounting = count.map(characterCount);

function characterCount(array) {
  return array.length;
}

console.log(charCounting);

// ? using `filter` write a function that returns an array only containing falsey value
// ? eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

const falsey = [100, {}, [], "Mike", null, 0];

const findFalsey = falsey.filter(containsFalsey);

function containsFalsey(array) {
  return array === -1;
}

console.log(findFalsey);

// ? using any array method, write a function that returns the string elements of an array that have a given number of characters or larger
// ? eg: wordsOfLength(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

const words = ["emu", "caterpiller", "rooster"];

const wordsFilter = words.filter(wordsOfLength);

minLength = 4;

function wordsOfLength(array, minLength) {
  if (array > minLength) {
    return array;
  }
}

console.log(wordsFilter);

// ? using any array method, write a function that converts an array of measurements as strings, into an array of numbers
// ? eg: measurementToNumber(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

const centimeters = ["10cm", "4.2cm", "205cm"];

const convert = centimeters.map(measurementToNumber);

function measurementToNumber(array) {
  return parseFloat(array);
}

console.log(convert);

// ? using `split` and `filter` write a function that counts the number of vowels in a sentence
// ? eg: numberOfVowels('Stay classy San Diego') => 6

function numberOfVowels(string) {}

// ? using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// ? eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'

function titleCase(string) {}

// ! please do not alter below ✋

module.exports = {
  demo,
  stringsOnly,
  convertTemps,
  characterCount,
  containsFalsey,
  wordsOfLength,
  measurementToNumber,
  numberOfVowels,
  titleCase,
};
