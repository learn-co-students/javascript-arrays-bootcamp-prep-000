var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var myArray = [0, 1]

function addElementToBeginningOfArray(myArray, newElement) {
  newArray = [newElement, ...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (myArray, newElement) {
  myArray.unshift(newElement)
  return myArray
}

function addElementToEndOfArray(myArray, newElement) {
  newArray = [...myArray, newElement]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, newElement) {
  myArray.push(newElement)
  return myArray
}

function accessElementInArray(myArray, index) {
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray (myArray) {
  myArray = myArray.slice(1)
  return myArray
}

function destructivelyRemoveElementFromEndOfArray (myArray) {
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray) {
  myArray = myArray.slice(0, myArray.length - 1)
  return myArray
}
