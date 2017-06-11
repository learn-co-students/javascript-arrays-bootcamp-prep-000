function chocolateBars() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles']
}

function addElementToBeginningOfArray(array, element) {
  var adjustedArray = [element, ...array]
  return adjustedArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var adjustedArray = [...array, element]
  return adjustedArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
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
  var adjustedArray = array.slice(1)
  return adjustedArray
}

 function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
 }

 function removeElementFromEndOfArray(array) {
   var adjustedArray = array.slice(0, array.length - 1)
   return adjustedArray
 }
