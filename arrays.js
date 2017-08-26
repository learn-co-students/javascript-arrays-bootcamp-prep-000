chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elt) {
  return [elt, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elt) {
  arr.unshift(elt)
  return arr
}

function addElementToEndOfArray(arr, elt) {
  return [...arr, elt]
}

function destructivelyAddElementToEndOfArray(arr, elt) {
  arr.push(elt)
  return arr
}

function accessElementInArray(arr, idx) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  arr = arr.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  arr = arr.slice(0, arr.length - 1)
  return arr
}
