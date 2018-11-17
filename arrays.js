var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(Array,Element) {
  var newArray = [Element, ... Array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(Array,Element) {
  Array.unshift(Element);
  return Array;
}

function addElementToEndOfArray(Array,Element) {
  var newArray = [... Array, Element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(Array,Element) {
  Array.push(Element);
  return Array;
}

function accessElementInArray(Array,Index) {
  return Array[Index];
}

function destructivelyRemoveElementFromBeginningOfArray(Array) {
  Array.shift();
  return Array;
}

function removeElementFromBeginningOfArray(Array) {
  var newArray = Array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(Array) {
  Array.pop();
  return Array;
}

function removeElementFromEndOfArray(Array) {
  var newArray = Array.slice(0, Array.length - 1);
  return newArray;
}