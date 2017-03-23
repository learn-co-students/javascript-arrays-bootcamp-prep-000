var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function accessElementInArray(array, index) {
  return array[index];

}

function addElementToBeginningOfArray(array, el) {
  var nuArray = array.unshift(el);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  return addElementToBeginningOfArray(array, el);
}

function addElementToEndOfArray(array, el) {
   array.push(el);
   return array;
}

function destructivelyAddElementToEndOfArray(array, el) {
  return addElementToEndOfArray(array, el);
}

function removeElementFromEndOfArray(array) {
   array.pop();
   return array;
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}
