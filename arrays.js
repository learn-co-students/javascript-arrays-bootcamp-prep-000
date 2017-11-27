var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var element = "M&Ms"
var element2 = "jawns"
var array = chocolateBars
var index = 1


function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array,element2) {
  array.unshift(element2)
  return array
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array,element) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1)
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(-2)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
