var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(arr, el) {
  return [el, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr, el) {
  return [...arr, el]
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el)
  return arr
}

function accessElementInArray(arr, i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift()
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
  return arr.slice(0, arr.length - 1)
}
