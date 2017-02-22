var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// fügt einen Item am Ende des Arrays hinzu
//chocolateBars.push('skittles')
// fügt einen Item am Beginn des Arrays hinzu
//chocolateBars.unshift('snickers')

// ['mars', ...chocolateBars] gibt mars, snickers, etc. arguments

function addElementToBeginningOfArray (array, element) {
  newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  newarray = array.slice(1)
  return newarray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}