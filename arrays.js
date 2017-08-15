var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element)
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var newarr = arr.slice(1)
  return newarr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
  return arr
}

function removeElementFromEndOfArray(arr) {
  var newarr = arr.slice(0, arr.length -1)
  return newarr
}
