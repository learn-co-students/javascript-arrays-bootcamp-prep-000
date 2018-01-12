var chocolateBars = ["snickers, hundred grand, kitkat, skittles"]

function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array3 = [...array, element]
  return array3
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, element) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  array.slice(1)
  array4 = array.slice(1)
  return array4
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray(array, element) {
  array.slice(0, array.length - 1)
  array5 = array.slice(0, array.length - 1)
  return array5
}