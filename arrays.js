var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, elementAdd) {
  var newChocolateBars = [elementAdd, ... array]
  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, elementAdd) {
  array.unshift(elementAdd)
  return array
}

function addElementToEndOfArray(array, elementAdd) {
  var newChocolateBarsEnd = [... array, elementAdd]
  return newChocolateBarsEnd
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var newChocolateBarsStart = array.slice(1)
  return newChocolateBarsStart
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var newChocolateBarsEnd = array.slice(0,array.length-1)
  return newChocolateBarsEnd
}
