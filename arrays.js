var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(anArray, anElement) {
  return [anElement, ...anArray]
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement) {
  anArray.unshift(anElement)
  return anArray
}

function addElementToEndOfArray(anArray, anElement) {
  return [...anArray, anElement]
}

function destructivelyAddElementToEndOfArray(anArray, anElement) {
  anArray.push(anElement)
  return anArray
}

function accessElementInArray(anArray, index) {
  index.parseInt
  return anArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(anArray) {
  anArray.shift()
  return anArray
}

function removeElementFromBeginningOfArray(anArray) {
  return anArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(anArray) {
  anArray.pop()
  return anArray
}

function removeElementFromEndOfArray(anArray) {
  return anArray.slice(0, anArray.length - 1)
}
