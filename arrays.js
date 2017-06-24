var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(array, element) {
var foo = [element, ...array] //is this or array.unshift(element) preferred?
return foo
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = function(array, element) {
  var bar = array
  bar.push(element)
  return bar
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
  var foo = array.slice(1)
  return foo
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop()
  return array
}

var removeElementFromEndOfArray = function(array) {
  var foo = array.slice(0, array.length -1)
  return foo
}
