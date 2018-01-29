var chocolateBars = ["nickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(arr, newElem) {
  arr.unshift(newElem)
  return arr
}

function addElementToBeginningOfArray(arr, newElem) {
  return [newElem, ...arr]
}

function destructivelyAddElementToEndOfArray(arr, newElem) {
  arr.push(newElem)
  return arr
}

function addElementToEndOfArray(arr, newElem) {
  return [...arr, newElem]
}

function accessElementInArray(arr, indexID) {
  return arr[indexID]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0,arr.length - 1)
}