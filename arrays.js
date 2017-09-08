var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(Array, Element) {
  var addElementToBeginningOfArray = [Array]
  addElementToBeginningOfArray.unshift(Element)
  return array

}

function destructivelyAddElementToBeginningOfArray(Array, Element) {
  var destructivelyAddElementToBeginningOfArray = [Array]
  [Element, ...destructivelyAddElementToBeginningOfArray]
  return new_array

}

function addElementToEndOfArray(Array, Element) {
  var addElementToEndOfArray = [Array]
  [...addElementToEndOfArray, Element]
  return array

}

function destructivelyAddElementToEndOfArray(Array, Element) {
  var destructivelyAddElementToEndOfArray = [Array]
  destructivelyAddElementToEndOfArray.push(Element)
  return new_array

}

var accessElementInArray = [Red, White, Blue]

function destructivelyRemoveElementFromBeginningOfArray(Array, Element) {
  var destructivelyRemoveElementFromBeginningOfArray = [Element, Array]
  destructivelyRemoveElementFromBeginningOfArray.shift()
  return array.unshift()

}

function removeElementFromBeginningOfArray(Array, Element) {
  var removeElementFromBeginningOfArray = [Element, Array]
  return removeElementFromBeginningOfArray.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(Array, Element) {
  var destructivelyRemoveElementFromEndOfArray = [Array, Element]
  return destructivelyRemoveElementFromEndOfArray.push()

}

function removeElementFromEndOfArray(Array, Element) {
  var removeElementFromEndOfArray = [Array, Element]
  return removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1)

}
