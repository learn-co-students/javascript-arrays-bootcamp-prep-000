var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["foo",...array];
    
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
  
}

function addElementToEndOfArray (array, element) {
  return [...array, "foo"];
  
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push("foo");
  return array
}

function accessElementInArray(array, index) {
  return (array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  array = array.slice(1);
  return array
}

function removeElementFromEndOfArray (array) {
 return array.slice(0, array.length - 1);
 }

function destructivelyRemoveElementFromEndOfArray(array) {
  var destructivelyRemoveElementFromEndOfArray = array.pop();
  return array
}
