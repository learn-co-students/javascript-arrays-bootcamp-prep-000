var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


var addElementToBeginningOfArray = (arr, val) => {
  var newArray = [val, ...arr]
  return newArray
}

var destructivelyAddElementToBeginningOfArray = (arr, val) => {
  arr.unshift(val)
  return arr
}

var addElementToEndOfArray = (arr, val) => {
  var newArray = [...arr, val]
  return newArray
}

var destructivelyAddElementToEndOfArray = (arr, val) => {
  arr.push(val)
  return arr
}

function accessElementInArray(arr, index) {
  var val = arr[index]
  return val
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {

  var newArray = arr.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  var newArray = arr.slice(0, arr.length - 1)
  return newArray
}
