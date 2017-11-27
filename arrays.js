var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, ele) {
  var cB = [ele, ...array]
  return cB
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  array.unshift(ele)
  return array
}

function addElementToEndOfArray(array, ele) {
  var cB = [...array, ele]
  return cB
}

function destructivelyAddElementToEndOfArray(array, ele) {
  array.push(ele)
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
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}








