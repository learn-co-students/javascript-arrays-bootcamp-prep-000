var chocolateBars = ['snickers', 'hundrend grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(array, element) {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  return array.unshift(element)
}

var addElementToEndOfArray = function(array, element) {
  return [...array, element]
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  return array.push(element)
}

var accessElementInArray = function(array, index) {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  return array.shift()
}

var removeElementFromBeginningOfArray = function(array) {
  return array.slice(0, 1)
}

var destructivelyRemoveElementFromEndOfArray = function() {
  return array.pop()
}

var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length - 1)
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  return array = [...array.slice(0, array.length - 1)]
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.splice(array.length - 1)
  return array
}

var removeElementFromBeginningOfArray = function(array) {
  return [...array.slice(1)]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.splice(0,1)
  return array
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.splice(0, 0, element)
  return array
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.splice(array.length, 0, element)
  return array
}
