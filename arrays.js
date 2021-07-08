var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToEndOfArray(array, item) {
  return[...array, item]
}

function addElementToBeginningOfArray(array, item) {
  return [item, ...array]
}

function destructivelyAddElementToEndOfArray(array, item) {
  array.push(item)
return array
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  array.unshift(item)
return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
   array.shift(1)
   return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(1)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, length - 1)
}
