var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
 var newArray = [element, ...array];
 return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element) {
  var endArray = [...array, element];
  return endArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  var someArray = array.slice([1]);
  return someArray;
}
// removeElementFromBeginningOfArray (array);
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  //This is good, but it will be a slice that's
  //exactly the same as the original
  //Give that a shot!
return array.slice(0, array.length - 1);
// return array;
}
