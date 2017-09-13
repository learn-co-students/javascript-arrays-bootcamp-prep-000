var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Takes two parameters, an array and an element to add to the beginning of the array
// Should return a new array and not modify the original.
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

// Takes two parameters, an array and an element to add to the beginning of the array
// Should alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// Takes two parameters, an array and an element to add to the beginning of the array
// Should Not alter the original array
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

// Takes two parameters, an array and an element to add to the beginning of the array
// Should alter the original array.
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// The function should accept an array and an index and return the element at that index.
function accessElementInArray(array, index) {
  return array[index];
}

// Takes an array as its only argument and removes the first element.
// Your function should then return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Takes an array as its only argument and removes the first element.
// Your function should then return the entire array, and it should not mutate the underlying array.
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// Takes an array as its only argument and removes the last element.
// Your function should return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// Takes an array as its only argument and removes the last element.
// Your function should return the array without the last element, and it should not mutate the original array.
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
