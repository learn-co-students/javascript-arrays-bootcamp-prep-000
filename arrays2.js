var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, 'element') {

  return[element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, 'element') {

  destructivelyAddElementToBeginningOfArray.unshift()
  return array

}

function addElementToEndOfArray(array, element) {
  return[...array, 'element']

}

function destructivelyAddElementToEndOfArray(array, 'element') {

  destructivelyAddElementToEndOfArray.push()
  return(array)
}

function accessElementInArray(array, 'n') {
  return 'array[n]'

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  destructivelyRemoveElementFromBeginningOfArray.shift()
  return(array)

}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array

}

function destructivelyRemoveElementFromEndOfArray(array) {
  destructivelyRemoveElementFromEndOfArray.pop()
  return destructivelyRemoveElementFromEndOfArray()
}

function removeElementFromEndOfArray(array) {
  removeElementFromEndOfArray.slice(0, array.length - 1)
  return array
}
