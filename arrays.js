var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, pos) {
  element = array[pos];
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newArray = array;
  newArray.shift();
  return newArray;

}

function removeElementFromEndOfArray(array) {
  newArray = array;
  newArray.pop();
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array;
}
