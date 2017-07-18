var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (anArray, addOn) {
  var anotherArray = anArray
  anotherArray.unshift(addOn)
  return anotherArray
}

function destructivelyAddElementToBeginningOfArray (anArray, addOn) {
  anArray.unshift(addOn)
  return anArray
}

function addElementToEndOfArray (anArray, addOn) {
  var anotherArray = anArray
  anotherArray.push(addOn)
  return anotherArray
}

function destructivelyAddElementToEndOfArray (anArray, addOn) {
  anArray.push(addOn)
  return anArray
}

function accessElementInArray (anArray, index) {
  return anArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray (anArray) {
  anArray.shift()
  return anArray
}

function removeElementFromBeginningOfArray (anArray) {
  const anotherArray = anArray.slice(1)
  return anotherArray
}

function destructivelyRemoveElementFromEndOfArray (anArray) {
  anArray.pop()
  return anArray
}

function removeElementFromEndOfArray (anArray) {
  const anotherArray = anArray.slice(0, anArray.length - 1)
  return anotherArray
}
