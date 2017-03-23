var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, n) {
newArray = [n, ...array]
return newArray
}

function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n)
  return array
}

function addElementToEndOfArray(array, n) {
newArray = [...array, n]
return newArray
}

function destructivelyAddElementToEndOfArray(array, n) {
array.push(n)
return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length -1)
  return newArray
}
