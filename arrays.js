var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(list, item) {
  list.unshift(item)
  return list
}

function addElementToBeginningOfArray(list, item) {
  var newAddition = [item, ...list]
  return newAddition
}

function destructivelyAddElementToEndOfArray(list, item) {
  list.push(item)
  return list
}

function addElementToEndOfArray(list, item) {
  var latestAddition = [...list, item]
  return latestAddition
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var prunedArray = array.slice(1)
  return prunedArray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  var trimmedArray = array.slice(0, array.length - 1)
  return trimmedArray
}