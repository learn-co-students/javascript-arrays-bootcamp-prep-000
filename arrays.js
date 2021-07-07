var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// Adding elements to the beginning of an array without modifying the original array
function addElementToBeginningOfArray(array, element) {
  var a = [element,...array];
  return a;
}

// Add element to the beginning of an array by altering the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  var dA = array;
  dA.unshift(element);
  return dA;
}

// Add element to end of an array without modifying the original array
function addElementToEndOfArray(array, element) {
  var eA = [...array, element];
  return eA;
}

// Add element to end of an array by modifying the original array
function destructivelyAddElementToEndOfArray(array, element) {
  var dEA = array
  dEA.push(element)
  return dEA;
}

// Accessing and element in an array
function accessElementInArray (array, index) {
  return array[index]
}

// Remove an element from the beginning of an array by modifying the original array
function destructivelyRemoveElementFromBeginningOfArray (array){
  var dREBA = array;
  dREBA.shift();
  return dREBA;
}

// Remove an element from the beginning of an array without modifying the original array
function removeElementFromBeginningOfArray (array) {
  var rEBA = array.slice(1);
  return rEBA;
}

// Remove an element from the end of an array by modifying the original array
function destructivelyRemoveElementFromEndOfArray (array) {
  var dREEA = array;
  dREEA.pop();
  return dREEA;
}

// Remove an element from the end of an array without modifying the original array
function removeElementFromEndOfArray(array) {
  var rEEA = array.slice(0, array.length -1);
  return rEEA;
}