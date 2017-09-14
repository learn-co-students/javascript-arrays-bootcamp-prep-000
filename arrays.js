var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  // we have an array being passed in, the array will be usable without having to be set
  // parameters get set during a function call, the test will be calling the functions
  // the test will be calling this function like addElementToBeginningOfArray([1], 'foo')
  // they want array to stay as [1]
  // they want a new array (non destructive) to be ['foo', 1]
  return [element, ...array]
}

// we have destructive array functions like .push, .shift .unshift ect, these return different values, not the array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  // array has been modified because of destructive functionality
  return array // ['foo', 1]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  index = 3
  return index
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array, element){
    return [element, ...array]
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray(array, element){
    return [...array, element]
}

function removeElementFromBeginningOfArray (array) {
  array = array.slice (1);
  return array;
}

function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length - 1);
  return array;
}
