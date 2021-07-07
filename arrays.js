var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(oldArray, newValue) {
  return [newValue, ...oldArray]
}

function destructivelyAddElementToBeginningOfArray(oldArray, newValue) {
  oldArray.unshift(newValue)
  return oldArray
}

function destructivelyAddElementToEndOfArray(oldArray, newValue) {
  oldArray.push(newValue)
  return oldArray
}

function addElementToEndOfArray(oldArray, newValue) {
  return [...oldArray, newValue]
}

function accessElementInArray(theArray, theIndex) {
  return theArray[theIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(theArray) {
  theArray.shift();
  return theArray
}

function removeElementFromBeginningOfArray(theArray) {
  return theArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(theArray) {
  theArray.pop()
  return theArray
}

function removeElementFromEndOfArray(theArray) {
  return theArray.slice(0, theArray.length - 1)
}
