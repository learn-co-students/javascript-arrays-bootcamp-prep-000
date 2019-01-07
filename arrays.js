var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, el){
  return [el, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, el){
  return array.unshift(el)
}

function addElementToEndOfArray(array, el) {
  return [...array, el]
}

function destructivelyAddElementToEndOfArray(array, el) {
  return array.push(el)
}

function accessElementInArray(array, i) {
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1)
}