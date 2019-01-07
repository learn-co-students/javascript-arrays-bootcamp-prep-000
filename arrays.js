var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray, element) {
  // No altering
  return [element, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // Alters
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  // No altering
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(myArray, element) {
  // Alters
  myArray.push(element)
  return myArray
}

function accessElementInArray(myArray, index) {
  return myArray[index]
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