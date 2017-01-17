var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// define function to add element to the beginning of above array
function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}



// define a function to alter the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// define a function that adds an element to the end of an arrays
// it should not alter the original arrays
function addElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

// define a function that adds an element to the end of an array
// it should alter the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

/* define a function that accepts an array and an
index and return the element at that index */
function accessElementInArray(array, element) {
  return(array, 3);
}

/* Define a function that takes an array as its only argument
and removes the first element. Your function should then return
the entire array, and it should mutate the array. */

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
}

/* Define a function that takes an array as its only argument
and removes the first element. Your function should then return
the entire array, and it should not mutate the underlying array. */

function removeElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

/* Define a function  that takes an array as its only argument
and removes the last element. Your function should return the
entire array, and it should mutate the array. */

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

/* Define a function that takes an array as its only argument
and removes the last element. Your function should return the
entire array, and it should not mutate the array. */

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
};
