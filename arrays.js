var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, item) {
  var array = [item, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  array.unshift(item)
  return array
}

function addElementToEndOfArray(array, item) {
  var array = [...array, item]
  return array
}

function destructivelyAddElementToEndOfArray(array, item) {
  array.push(item)
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
  var array = array.slice(1)
  return array
}

function removeElementFromEndOfArray(array) {
  var array = array.slice(0, array.length - 1)
  return array
}
