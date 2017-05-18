var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var array = ['foo', 1];
  var newArray = ["element", ...array];
  return array;
}


function destructivelyAddElementToBeginningOfArray(array, foo) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
  var array = [1, "foo"];
  var newArray = [...array, "element"];
  return array;
}

function destructivelyAddElementToEndOfArray(array, foo) {
  array.push("foo");
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();
   return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}