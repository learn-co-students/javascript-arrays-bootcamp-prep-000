var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArray, myElement) {
  myArray = [1]
  myArray.unshift(myElement)
  return myArray
}

function destructivelyAddElementToBeginningOfArray(myArray, myElement) {
  myArray.unshift(myElement)
  return myArray
}

function addElementToEndOfArray(myArray, myElement) {
  myArray = [1]
  myArray.push(myElement)
  return myArray
}

function destructivelyAddElementToEndOfArray(myArray, myElement) {
  myArray.push(myElement)
  return myArray
}

function accessElementInArray(myArray, myIndex) {
  return myArray[myIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift([1])
  return myArray 
}

function removeElementFromBeginningOfArray(myArray) {
  myArray = [1, 2, 3]
  myArray.shift([1])
  return myArray
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
  return myArray 
}

function removeElementFromEndOfArray(myArray) {
  myArray = [1, 2, 3]
  myArray.pop()
  return myArray
}



