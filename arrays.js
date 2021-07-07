var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementtoBeginningofArray(str, arr) {
	return [str, ...arr]
}

function destructivelyAddElementtoBeginningofArray(str, arr) {
	return arr.unshift(str)
}

function addElementtoEndofArray(str, arr) {
	return [...arr, str]
}

function destructivelyAddElementToEndOfArray(str, arr) {
	return arr.push(str)
}

function accessElementInArray(idx, arr) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift
}
function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop
 }

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1)
}
