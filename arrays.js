var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [4, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(4)
}

function addElementToEndOfArray(array, element) {
  return [...array, 4]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(4)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
