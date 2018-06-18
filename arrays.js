var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
   return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
=======

function addElementToBeginningOfArray(array, "foo") {
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, "foo") {
  array = ['foo', ...array]
  return array
>>>>>>> e84342d338e1e26017513a478cfecebc29dfd18e
}
