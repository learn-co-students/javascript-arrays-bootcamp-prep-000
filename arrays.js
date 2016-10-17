var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(books, element) {
  return newArray = [element, ...books]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return newArray = array.unshift(element);
}

function accessElementInArray(array, index) {
  return newArray = console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningofArray(array) {
  return newArray = array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
