chocolateBars = ['Snickers', 'Hundred Grand', 'KitKat', 'Skittles'];

function addElementToBeginningOfArray(array, element) {
  return noalt1 = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return noalt2 = [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  return noalt3 = array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  return noalt4 = array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}