
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, elementToAdd) {
  //theArray.unshift(elementToAdd)
  var spreadArray = [elementToAdd, ...theArray]
  return spreadArray
}


function destructivelyAddElementToBeginningOfArray(theDestructiveArray, destructiveElementToAdd) { 
   //[destructiveElementToAdd,...theDestructiveArray]
   theDestructiveArray.unshift(destructiveElementToAdd)
    return theDestructiveArray
}

function addElementToEndOfArray(theAddArray, elementAddToAdd) {
  var spreadAddArray = [...theAddArray, elementAddToAdd]
  return spreadAddArray
}

function destructivelyAddElementToEndOfArray(theDestructiveAddArray, destructiveElementAddToAdd) {
  theDestructiveAddArray.push(destructiveElementAddToAdd)
  return theDestructiveAddArray
}

function accessElementInArray(theArray, theIndex) {
  return theArray[theIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(theRemoveArray) {
  theRemoveArray.shift()
  return theRemoveArray
}

function removeElementFromBeginningOfArray(theNiceRemoveArray) {
  var sliceResult = theNiceRemoveArray.slice(1)
  return sliceResult
}

function destructivelyRemoveElementFromEndOfArray(meanRemoveArray) {
  meanRemoveArray.pop()
  return meanRemoveArray
}

function removeElementFromEndOfArray(nameRemoveArray) {
  var sliceResult = nameRemoveArray.slice(0, nameRemoveArray.length - 1)
  return sliceResult
}