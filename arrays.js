var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(anArray, anElement) {
  return [anElement, ...anArray]
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement) {
    return anArray = anArray.unshift(anElement)
}

function addElementToEndOfArray(anArray, anElement) {
  return [...anArray, anElement]
}

function destructivelyAddElementToEndOfArray(anArray, anElement) {
    return anArray.push(anElement)
}

function accessElementInArray(anArray,index) {
  return anArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(anArray) {
  return anArray.shift() 
}

function removeElementFromBeginningOfArray(anArray) {
  return anArray.slice(0,1) 
}

function destructivelyRemoveElementFromEndOfArray(anArray) {
  return anArray.pop() 
}

function removeElementFromEndOfArray(anArray) {
  return anArray.slice(0,anArray.length - 1) 
}
