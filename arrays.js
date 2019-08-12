var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [1]
  var element = 'foo'
  return [element, ...array]
}

const array = [1]
function destructivelyAddElementToBeginningOfArray(array, element) {
  var element = 'foo'
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = [1]
  var element = 'foo'
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var element = 'foo'
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return array[2]
}

//const array = [1, 2, 3]
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array = array.slice(1)
  return array
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  array = array.slice(0, length - 1)
  return array
}
