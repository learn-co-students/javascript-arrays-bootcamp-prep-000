var chocolateBars = [  'snickers', 'hundred grand', 'kitkat', 'skittles' ]

function addElementToBeginningOfArray(originalArray, newElement) {
  return [newElement, ...originalArray]
}

function destructivelyAddElementToBeginningOfArray(originalArray, newElement) {
  originalArray.unshift(newElement)
  return originalArray
}

function addElementToEndOfArray(originalArray, newElement) {
  return [...originalArray,newElement]
}

function destructivelyAddElementToEndOfArray(originalArray, newElement) {
  originalArray.push(newElement)
  return originalArray
}

function accessElementInArray(originalArray, elementIndex) {
  return originalArray[elementIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(originalArray) {
  return originalArray.shift()
}

function removeElementFromBeginningOfArray(originalArray) {
  return originalArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(originalArray) {
  return originalArray.pop()
}

function removeElementFromEndOfArray(originalArray) {
  return originalArray.slice(0,originalArray.length - 1)
}
