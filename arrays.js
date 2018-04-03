var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var clone = [...array];
  clone.unshift(element);
  return clone;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var clone = [...array];
  clone.push(element);
  return clone;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, element) {
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "f"))
console.log([...chocolateBars].unshift("d"))