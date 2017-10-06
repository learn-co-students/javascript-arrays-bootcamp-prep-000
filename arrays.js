var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, 'foo') {
return ['foo', ...array]
}

function destructivelyAddElementToBeginningOfArray(array, 'foo') {
array = ['foo', ...array]
return array
}

function addElementToEndOfArray(array, 'foo') {
return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, 'foo') {
array = [...array, 'foo']
return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
}

function removeElementFromBeginningOfArray(array) {
array.slice(1)
return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  array.slice(0, length -1 )
  return array
}
