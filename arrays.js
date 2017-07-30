var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  newArray = array;
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  newArray = array;
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray;
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  newArray = array;
  return newArray
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length-1)
  return newArray
}
