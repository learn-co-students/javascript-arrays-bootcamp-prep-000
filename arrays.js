var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(argArray, argElement) {
  return [argElement, ...argArray]
}

function destructivelyAddElementToBeginningOfArray(argArray, argElement) {
  argArray = [argElement, ...argArray]
  return argArray
}

function addElementToEndOfArray(argArray, argElement) {
  return [...argArray, argElement]
}

function destructivelyAddElementToEndOfArray(argArray, argElement) {
  argArray = [...argArray, argElement]
  return argArray
}

function accessElementInArray(argArray, argIndex) {
  return argArray[argIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(argArray) {
  argArray.shift()
  return argArray
}

function removeElementFromBeginningOfArray(argArray) {
  return argArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(argArray) {
  argArray.pop()
  return argArray
}

function removeElementFromEndOfArray(argArray) {
  return argArray.slice(0, argArray.length - 1)
}
