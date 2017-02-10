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
  return array.push(elementAdd)
}

function addElementToEndOfArray(array, elementAdd) {
  var newChocolateBarsEnd = [... array, elementAdd]
  return newChocolateBarsEnd
}

function destructivelyAddElementToEndOfArray(array, elementAdd) {
  return array.unshift(elementAdd)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function