var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   var array = array;
   array.unshift(element);
   return array;
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array = array;
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 var newArray = array
 array.shift();
 return newArray;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var newArray = array
  array.pop();
  return newArray;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray;
}
