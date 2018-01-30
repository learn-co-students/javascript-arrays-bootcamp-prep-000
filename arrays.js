const chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element)
}

function addElementToBeginningOfArray(array, element) {
  return array.push("element")
}

addElementToBeginningOfArray();
