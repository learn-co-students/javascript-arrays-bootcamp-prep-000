var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element) {
  var fnArray = [element, ...array];
  return fnArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element) {
  var fnArray = [...array, element];
  return fnArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromEndOfArray(array) {
  var fnArray = array;
  return fnArray.slice(0, -1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}


function accessElementInArray(array, index) {
  return array[index];
}
