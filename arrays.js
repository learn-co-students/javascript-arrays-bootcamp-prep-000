var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(nameOfArray, element) {
  var newArray = nameOfArray.unshift(element)
  return nameOfArray
}

function destructivelyAddElementToBeginningOfArray(nameOfArray, element) {
  nameOfArray.unshift(element)
  return nameOfArray
}

function addElementToEndOfArray(nameOfArray, element) {
  var newArray = nameOfArray.push(element)
  return nameOfArray
}

function destructivelyAddElementToEndOfArray(nameOfArray, element) {
  nameOfArray.push(element)
  return nameOfArray
}

function accessElementInArray(nameOfArray, index) {
  return nameOfArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(nameOfArray) {
  nameOfArray.shift()
  return nameOfArray
}

function removeElementFromBeginningOfArray(nameOfArray) {
  nameOfArray = nameOfArray.slice(1)
  return nameOfArray
}

function removeElementFromEndOfArray(nameOfArray) {
  var newArray = nameOfArray.pop()
  return nameOfArray
}
