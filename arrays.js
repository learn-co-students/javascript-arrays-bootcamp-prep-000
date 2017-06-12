var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newbeginning) {
  var longerArray = [newbeginning, ...array]
  return longerArray
}

function destructivelyAddElementToBeginningOfArray(array, newbeginning) {
  array.unshift(newbeginning)
  return array
}

function addElementToEndOfArray(array, newending) {
  var lenthenedArray = [...array, newending]
  return lenthenedArray
}

function destructivelyAddElementToEndOfArray(array, newending) {
  array.push(newending)
  return array
}

function accessElementInArray(array, idx) {
  return array[idx]
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
