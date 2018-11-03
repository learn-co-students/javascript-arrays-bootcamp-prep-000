var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, addToArray){
  var returnArray = [addToArray, ...theArray]

  return returnArray
}

function destructivelyAddElementToBeginningOfArray(theArray, addToArray){
  theArray.unshift(addToArray)
  return theArray
}

function addElementToEndOfArray(theArray, addToArray){
  var returnArray = [...theArray, addToArray]
  return returnArray
}

function destructivelyAddElementToEndOfArray(theArray, addToArray){
  theArray.push(addToArray)
  return theArray
}

function accessElementInArray(theArray, theIndex){
  return theArray[theIndex]
}

function destructivelyRemoveElementFromEndOfArray(theArray){
  theArray.pop()
  return theArray
}

function removeElementFromBeginningOfArray(theArray){
  return theArray.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(theArray){
  theArray.shift(1)

  return theArray
}

function removeElementFromEndOfArray(theArray){
  var returnArray = theArray.slice(0, theArray.length - 1)
  return returnArray
}
