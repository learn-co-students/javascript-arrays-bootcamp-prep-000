var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var array = [1]
function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
addElementToBeginningOfArray('foo', array)


var array = [1]
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
destructivelyAddElementToBeginningOfArray(array, "foo")

var array = [1]
function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}
addElementToEndOfArray(array, 'foo')

var array = [1]
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
destructivelyAddElementToEndOfArray(array, "foo")

var array = ["zero", "one", "two", "three", "four"]
function accessElementInArray(array, index) {
  return array[index]
}
accessElementInArray(array, "3")

var array = ["zero", "one", "two", "three", "four"]
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
destructivelyRemoveElementFromBeginningOfArray(array)

var array = [1, 2, 3]
function removeElementFromBeginningOfArray(array) {
  var minusOne = array.slice(1)
  return minusOne
}
removeElementFromBeginningOfArray(array)


var array = [1, 2, 3]
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
destructivelyRemoveElementFromEndOfArray(array)

var array = [1, 2, 3]
function removeElementFromEndOfArray(array) {
  var backwards = array.slice(0, array.length -1)
  return backwards
}
removeElementFromEndOfArray(array)
