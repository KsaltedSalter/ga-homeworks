/* eslint-disable no-unused-vars */

// * Below is a demo function to practice running the automated tests.
// * add the statement 'return []' to the function, save the file.
// * Run the tests with the command inside your terminal 'npm run test'
// * You should now see this demo test passing in the ouput report
function demo(array) {
  return [];
}

// ? using "map" write a function that returns the string 'even' for all even numbers in an array, and 'odd' for odd numbers.
// ? Eg. [1, 2, 3, 4, 5, 6, 7, 8] -> ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

const numberList = [1, 2, 3, 4, 5, 6, 7, 8];

const whatIsIt = numberList.map(oddsAndEvens);

function oddsAndEvens(array) {
  if (array % 2 === 0) {
    return "even";
  } else if (array % 2 === 1) {
    return "odd";
  }
}

// ? write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
// ? eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];

const stringOfWords = ["hat", "bat", "cat", "Bell"];

const whatHasB = stringOfWords.filter(beginsWithB);

function beginsWithB(array) {
  return array.startsWith("B");
}

console.log(whatHasB);

// ? write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
// ? eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];

const numbersThatWillMultiply = [10, 3, -2, 0, 100];

const willEvenDoNegative = numbersThatWillMultiply.map(multiplyBy10);

function multiplyBy10(array) {
  if (Math.sign(array) === -1) {
    return array * -10;
  } else if (Math.sign(array) === 1 || Math.sign(array) === 0) {
    return array * 10;
  }
}

console.log(willEvenDoNegative);

// ? write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return 'Not Found'.
// ? eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => 'Not Found';

const listOfNames = ["Mike", "Rane", "Alex"];

const toFindTheIndex = findIndex.filter();

function findIndex(val, array) {}

// ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;

const numbers = [8, 12, 15];

const canNumbers = numbers.includes(divisibleBy5);

function divisibleBy5(array) {
  if (array % 5 === 0) {
    return "true";
  } else if (array % 5 === 1) {
    return "false";
  }
}

console.log(canNumbers);

// ? write a function that checks whether ALL of the numbers in the array are can be divided by 10. It should return true or false.
// ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
function divisibleBy10(array) {}

// ? write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
// ? eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
function sumOfArray(array) {}

// ! please do not alter below ✋

module.exports = {
  demo,
  oddsAndEvens,
  beginsWithB,
  multiplyBy10,
  findIndex,
  divisibleBy5,
  divisibleBy10,
  sumOfArray,
};
