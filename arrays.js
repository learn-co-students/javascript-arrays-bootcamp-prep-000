var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["Copenhagen", "Berlin", "Stockholm"];

function addElementToBeginningOfArray(array, newArrayItem) {
  return [newArrayItem, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, newArrayItem) {
  array.unshift(newArrayItem);
  return array;
}

function addElementToEndOfArray(array, newArrayItem) {
  return [...array, newArrayItem];
}

function destructivelyAddElementToEndOfArray(array, newArrayItem) {
  array.push(newArrayItem);
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
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1)
}