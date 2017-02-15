var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(originalArray, addition) {
  return [addition, ...originalArray]
}

function destructivelyAddElementToEndOfArray(originalArray, addition) {
  originalArray.unshift(addition)
  return originalArray
}

function accessElementInArray(originalArray, index) {
  return originalArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(originalArray) {
  originalArray.shift()
  return originalArray
}

function removeElementFromBeginningOfArray(originalArray) {
  newArray = originalArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(originalArray) {
  originalArray.pop()
  return originalArray
}

function removeElementFromEndOfArray(originalArray) {
  newArray = originalArray.slice(0, originalArray.length - 1)
  return newArray
}
