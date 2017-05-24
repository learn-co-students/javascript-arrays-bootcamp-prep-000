// an array containing "snickers", "hundred grand", "kitkat", and "skittles"
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// adds an `element` to the beginning of an `array` (immutable)
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

// adds an `element` to the beginning of an `array` (mutable)
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}

// returns a new array with `element` added to the end (immutable)
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

// adds an `element` to the end of an `array` (mutable)
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// accesses the element in `array` at the given `index`
function accessElementInArray(array, index) {
  return array[index];
  done();
}

// returns the `array` with the first element removed (mutable)
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// returns a new `array` with the first element removed (immutable)
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
  done();
}

// returns the `array` with the last element removed (mutable)
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// removes the last element from the `array`
function removeElementFromEndOfArray(array) {
  array.splice(array.length - 1);
  return array;
  done();
}
