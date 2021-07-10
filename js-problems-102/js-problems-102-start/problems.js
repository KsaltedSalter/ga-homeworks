/* eslint-disable no-unused-vars */

// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter(function (el) {
    return el != null;
  });
}

console.log(removeBlank);

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]

function secondLowestSecondHighest(array) {
  const numArray = array.sort((a, b) => (a > b ? 1 : -1));
  console.log(numArray);
  const secondHighest = numArray.slice(-2, -1)[0];
  console.log(secondHighest);
  const secondLowest = numArray[1];
  console.log(secondLowest);
  console.log(secondLowest, secondHighest);
  const newArray = [];
  newArray.push(secondLowest, secondHighest);
  console.log(newArray);
  return newArray;
}

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  const priceToCoins = price * 100;
}

// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const joinedArray = arr1.concat(arr2);
  console.log(joinedArray);

  const unique = joinedArray.filter((v, i, a) => a.indexOf(v) === i);
  console.log(unique);
  return unique;
}

// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const result = [0, 1];
  for (var i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result[n - 1];
}

module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  fibonacci,
};
