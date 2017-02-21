var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

/* add element to beginning of array not altering the original array */
function addElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr]
}

/* add element to beginning of array altering the original array */
function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}

/* add element to end of array not altering the original array */
function addElementToEndOfArray(arr, elem) {
  return [...arr, elem]
}

/* add element to end of array altering the original array */
function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, indx) {
  return arr[indx]
}

/* remove element from beginning of array altering the original array */
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

/* remove element from beginning of array not altering the original array */
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

/* remove element from end of array altering the original array */
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

/* remove element from end of array not altering the original array */
function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1)
}
