// define some arrays as per README and tests

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//IMMUTABLE versions
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function accessElementInArray(array, index) {
  return array[index] //no boundary checking done
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,-1)
}

/*
  *** IMMUTABLE versions
  */
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element); //REMEMBER shift ... unshift
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift() //remove first element
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element) // REMEMBER: push <==> pop
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
