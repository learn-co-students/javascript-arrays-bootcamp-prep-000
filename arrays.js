var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,foo) {
 array = ["foo",...array]
 return array
}

function destructivelyAddElementToBeginningOfArray(array,foo) {
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array,foo) {
  array = [...array,"foo"]
  return array
}

function destructivelyAddElementToEndOfArray(array,foo) {
  array.push("foo")
  return array
}

function accessElementInArray(array,n) {
  return array[n]
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