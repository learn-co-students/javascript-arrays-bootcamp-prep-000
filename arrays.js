var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {

  return [element, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {

 chocolateBars.unshift(element)
 return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element) {

  return [...chocolateBars, element]
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {

 chocolateBars.push(element)
 return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {

  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
