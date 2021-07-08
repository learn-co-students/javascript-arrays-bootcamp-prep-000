var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var addElementToBeginningOfArray = function(array, elem) {
  return [elem, ...array]
}

var destructivelyAddElementToBeginningOfArray = function(array, elem) {
  array.unshift(elem)
  return array
}

var addElementToEndOfArray = function(array, elem) {
  return [...array, elem]
}

var destructivelyAddElementToEndOfArray = function(array, elem) {
  array.push(elem)
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

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop()
  return array
}

var removeElementFromEndOfArray = function(array) {
  return array.slice(0, -1)
}