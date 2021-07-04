var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var array = [1, 2, 3]

function addElementToBeginningOfArray(array, foo) {
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, foo) {
  return [...array, "foo"]
}

function destructivelyAddElementToEndOfArray(array, foo) {
  array.push("foo")
  return array
}

function accessElementInArray() {
  return (array[2])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
