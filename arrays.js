var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array , element) {
  
  var chocolate = [element, ...array]
  return chocolate
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var chocolate = [...array, element]
  return chocolate
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromEndOfArray(array) {
  var work = array.slice(0, array.length - 1)
  return work
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(array)
  return array
}

function removeElementFromBeginningOfArray(array) {
  var dumb =array.slice(1)
  return dumb
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}





