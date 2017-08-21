var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  //does not alter input array returns new array
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  //alters input array and returns result
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  //does not alter input array returns new array
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  //alters input array and returns result
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  //returns element at specific index
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  //alters input array and returns result
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}
