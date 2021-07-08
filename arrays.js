var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, toAdd) {
  var newArray = [toAdd, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (arr, toAdd) {
  arr.unshift(toAdd)
  return arr
}

function addElementToEndOfArray (arr, toAdd) {
  var newArray = [...arr, toAdd]
  return newArray
}

function destructivelyAddElementToEndOfArray (arr, toAdd) {
  arr.push(toAdd)
  return arr
}

function accessElementInArray (arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray (arr) {
  var newArray = arr.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray (arr) {
  newArray = arr.slice(0, arr.length-1)
  return newArray
}

