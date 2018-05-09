chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  result = [element, ...array]
  return result;
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  result = [...array, element];
  return result;
}

function destructivelyAddElementToEndOfArray(array, element)  {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array)  {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  result = array.slice(1);
  return result;
}

function destructivelyRemoveElementFromEndOfArray(array)  {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  result = array.slice(0, array.length - 1)
  return result
}