var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, el) {
  newArray = [el, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el)
  return array
}

function addElementToEndOfArray(array, el) {
  newArray = [...array, el]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, el) {
  array.push(el)
  return array
}

function accessElementInArray(array, i) {
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
