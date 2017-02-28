var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
    var a = [element, ...array]
    return a;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var a = [...array, element];
  return a;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  var a = array.shift(element);
  return a;
}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  var a = array.pop(element);
  return a;
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1);
}
