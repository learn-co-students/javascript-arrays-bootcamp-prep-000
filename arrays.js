// 1 
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// 2 
function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array];
  return newArray;
}

// 3 
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array; 
}

// 4 
function addElementToEndOfArray (array, element) {
  var newArray = [...array, element];
  return newArray;
}

// 5 
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

// 6 
function accessElementInArray (array, index) {
  return array[index];
}

// 7 
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

// 8 
function removeElementFromBeginningOfArray (array) {
  array = array.slice(1);
  return array;
}

// 9 
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

// 10 
function removeElementFromEndOfArray (array) {
  array = array.slice(0, -1);
  return array;
}


