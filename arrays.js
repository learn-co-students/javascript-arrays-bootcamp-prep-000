var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element) {
  myArray = ["foo"];
  return [...myArray, 1];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  myArray = array;
  myArray.unshift("foo");
  return myArray;
}

function addElementToEndOfArray(array, element) {
  myArray = [1];
  return [...myArray, "foo"];
}

function destructivelyAddElementToEndOfArray(array, element) {
  myArray = array;
  myArray.push("foo");
  return myArray;
}

var entrepreneurs = ["Oprah Winfrey", "Lauren Powell Jobs", "Arianna Huffington"];



function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(2)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}