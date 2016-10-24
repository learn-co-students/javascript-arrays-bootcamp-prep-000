var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(initial, element) {
  newArray = [element, ...initial]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (initial, element) {
  initial.unshift(element)
  return initial
}

function addElementToEndOfArray (initial, element) {
  newArray = [...initial, element]
  return newArray
}

function destructivelyAddElementToEndOfArray (initial, element) {
  initial.push(element)
  return initial
}

function accessElementInArray (initial, ind) {
  return initial[ind]
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift()
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0,arr.length-1)
}
