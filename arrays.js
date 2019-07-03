function chocolateBars() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"]
  return array
}
chocolateBars()

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
addElementToBeginningOfArray([1], 'foo')

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
destructivelyAddElementToBeginningOfArray([1], 'foo')

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
addElementToEndOfArray([1], 'foo')

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
destructivelyAddElementToEndOfArray([1], 'foo')

function accessElementInArray(array, index) {
  return array[index]
}
accessElementInArray([1, 2, 3], 2)

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
removeElementFromBeginningOfArray([1, 2, 3])

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
destructivelyRemoveElementFromEndOfArray([1, 2, 3])

function removeElementFromEndOfArray(array) {
  return array.slice(0, 2)
}
removeElementFromEndOfArray([1, 2, 3])
