var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array1 = array
  array.unshift(element)
  return array1
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array1 = array
  array1.unshift(element)
  return array1
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array1 = array
  array1.push(element)
  return array1
}

function addElementToEndOfArray(array, element) {
  var array1 = array
  array1.push(element)
  return array1
}

function accessElementInArray(array, index) {
  var array = [1,2,3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
  }

  function removeElementFromEndOfArray(array) {
    array.pop()
    return array
  }
