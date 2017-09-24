var chocolateBars = ['snicker', 'hundred grand', 'kit kat', 'skittles']
chocolateBars.push('Twix')
console.log(chocolateBars)
function addElementToBeginningOfArray ([array], add) {
  var arrays = [add, array]
  return arrays
}
addElementToBeginningOfArray('Josh','Drake')

function destructivelyAddElementToBeginningOfArray (array, add) {
  array.unshift(add)
  return array
}

function addElementToEndOfArray ([array], add) {
  var arrays = new Array(array, add)
  return arrays
}

function destructivelyAddElementToEndOfArray (array, add) {
  array.push(add)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array, remove) {
  array.shift(remove)
  return array
}

function removeElementFromBeginningOfArray (array) {
  array.slice(1)
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array, remove) {
  array.pop(remove)
  return array
}

function removeElementFromEndOfArray (array) {
  return array.slice(0,array.length - 1)
}
