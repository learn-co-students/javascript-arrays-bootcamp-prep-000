var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

var addElementToBeginningOfArray = function(array, element) {
  array = [element, ...array]
  return array
  }

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = function(array, element) {
  array = [...array, element]
  return array
  }

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element)
  return array
}

var accessElementInArray = function(array, index) {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift()
  return array
}

var removeElementFromBeginningOfArray = function(array) {
  return array.slice(1)
}

var addElementToBeginningOfArray = function(array, element) {
  array = [element, ...array]
  return array
  }

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop()
  return array
}

var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length -1)
}

