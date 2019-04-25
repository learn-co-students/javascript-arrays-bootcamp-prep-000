var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray, n) {
  return [n, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray, n) {
  myArray.unshift(n)
  return myArray
}

function addElementToEndOfArray(myArray, n) {
  return [...myArray, n]
}

function destructivelyAddElementToEndOfArray(myArray, n) {
  myArray.push(n)
  return myArray
}

function accessElementInArray(myArray, n) {
  return myArray[n]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(myArray) {
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1)
}
