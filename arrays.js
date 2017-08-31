var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem]
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function removeElementFromBeginningOfArray(arr) {
  let copy = [...arr]
  copy.shift()
  return copy
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  let copy = [...arr]
  copy.pop()
  return copy
}
