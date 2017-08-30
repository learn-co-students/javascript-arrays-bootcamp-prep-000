var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var endArray = array
  endArray.push(element)
  return endArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  destroyEnd = array
  destroyEnd.push(element)
  return destroyEnd;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  var theBeginning = array
  return theBeginning.slice(1);
}

function removeElementFromEndOfArray(array) {
  var theEnd = array
  theEnd.pop()
  return theEnd;
}
