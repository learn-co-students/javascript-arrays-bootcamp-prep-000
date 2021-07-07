var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, b) {
  return [b, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, b) {
  array.unshift(b);
  return array
}

function addElementToEndOfArray(array, b) {
  return [...array, b]
}

function destructivelyAddElementToEndOfArray(array, b) {
  array.push(b);
  return array
}

function accessElementInArray(array, n) {
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
