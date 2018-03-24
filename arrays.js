var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (oldArray, item) {
  var newArray = [...oldArray]
  newArray.unshift(item)
  return newArray
}

function destructivelyAddElementToBeginningOfArray (oldArray, item) {
  oldArray.unshift(item)
  return oldArray
}

function addElementToEndOfArray (oldArray, item) {
  var newArray = [...oldArray]
  newArray.push(item)
  return newArray
}

function destructivelyAddElementToEndOfArray (oldArray, item) {
  oldArray.push(item)
  return oldArray
}

function accessElementInArray (arrayIn, index) {
  return arrayIn[index]
}

function destructivelyRemoveElementFromBeginningOfArray (oldArray) {
  oldArray.shift()
  return oldArray
}

function removeElementFromBeginningOfArray (oldArray) {
  return oldArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (oldArray) {
  oldArray.pop()
  return oldArray
}

function removeElementFromEndOfArray (oldArray) {
  return oldArray.slice(0, oldArray.length - 1)
}

