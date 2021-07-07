var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(arr, ind) {
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  arr.pop(-1)
  return arr
}
