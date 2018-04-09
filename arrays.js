var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(list) {
  list.shift();
  return list;
}

function removeElementFromBeginningOfArray(list) {
  return list.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(list) {
  list.pop();
  return list;
}

function removeElementFromEndOfArray(list) {
  return list.slice(0, list.length - 1);
}