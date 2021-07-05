var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var x = array
  x = x.slice(1)
  return x
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var x = array
  x = x.slice(0, x.length - 1)
  return x
}

function accessElementInArray(array, index) {
  var x = array[index]
  return x
}
