var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  element = ["chocolate", ...chocolateBars]
  return element
}

function destructivelyAddElementToBeginningOfArray (array) {
  return array.unshift("chocolate");
}

function addElementToEndOfArray (array, element) {
  element = [...chocolateBars, "chocolate"]
  return element
}

function destructivelyAddElementToEndOfArray (array) {
  return array.push("chocolate");
}

function accessElementInArray (array, index) {
  console.log(array[index])

}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift()
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop()
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}
