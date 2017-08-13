var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array1 = array
  array1.unshift(element)
  return array1
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array1 = array
  array1 = array1.slice(1)
  return array1
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var array1 = array
  array1 = array1.slice(0, array1.length - 1)
  return array1
}
