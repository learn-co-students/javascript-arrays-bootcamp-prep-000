var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (arrayToAddTo, itemToAdd) {
  return [itemToAdd, ...arrayToAddTo]
}

function destructivelyAddElementToBeginningOfArray (arrayToAddTo, itemToAdd) {
  arrayToAddTo.unshift(itemToAdd)
  return arrayToAddTo
}

function addElementToEndOfArray (arrayToAddTo, itemToAdd) {
  return [...arrayToAddTo, itemToAdd]
}

function destructivelyAddElementToEndOfArray (arrayToAddTo, itemToAdd) {
  arrayToAddTo.push(itemToAdd)
  return arrayToAddTo
}

function accessElementInArray(arrayToAccess, index) {
  return arrayToAccess[index]
}

function destructivelyRemoveElementFromBeginningOfArray (arrayToChange) {
  arrayToChange.shift()
  return arrayToChange
}

function removeElementFromBeginningOfArray (arrayToChange) {
  return arrayToChange.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arrayToChange) {
  arrayToChange.pop()
  return arrayToChange
}

function removeElementFromEndOfArray (arrayToChange) {
  return arrayToChange.slice(0, arrayToChange.length - 1)
}
