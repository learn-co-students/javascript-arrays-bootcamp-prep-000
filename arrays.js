var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

// Adds an element at the beginning of an array without mutating it
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

// Adds an element at the beginning of an array and mutates it
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// Adds an element at the end of an array without mutating it
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

// Adds an element at the end of an array and mutates it
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// Returns the element at an index within an array 
function accessElementInArray(array, index) {
  return array[index];
}

// Removes an element at the beginning of an array and mutates it
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

// Removes the first element of an array without mutating it
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// Removes the last element within an array and mutates it
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

// Removes the last element within an array without mutating it
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}


