var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  var newArr = [...array]
  newArr.unshift(element);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array]
  newArr.push(element);
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, element) {
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array, element) {
  var newArr =  [...array]
  newArr.shift();
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array, element) {
  var newArr =  [...array]
  newArr.pop();
  return newArr;
}