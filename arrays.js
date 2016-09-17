var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newElement = array
  newElement.unshift(element)
  return newElement;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  destroyArray = array
  destroyArray.unshift(element)
  return destroyArray;
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
