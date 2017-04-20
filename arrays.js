var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array1[], add) {
  return [...array1, add]
}

function destructivelyAddElementToBeginningofArray (array1[], add) {
  return array1.push(add)
}