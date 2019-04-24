var chocolateBars = ['snickers', "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  new_array = [element, ...array]  // add element to beginning
  return new_array  // return new array. do not modify the orig.
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)  //returnw whole. modifying the original
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = [...array, element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  new_array = array.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  new_array = array.slice(0, array.length - 1)
  return new_array
}