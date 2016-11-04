var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  const arrayMod = [element, ...array]
  return arrayMod
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const modArray = [...array, element]
  return modArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

destructivelyRemoveElementFromBeginningOfArray = (array) =>
  array.shift()

removeElementFromBeginningOfArray = (array) =>
  array.slice(1)

removeElementFromEndOfArray = (array) =>
  array.slice(0, array.length - 1)

  
