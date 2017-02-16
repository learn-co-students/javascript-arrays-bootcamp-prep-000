function addElementToBeginningOfArray(arrayWas, elementToAdd) {

  return [elementToAdd, ...arrayWas]
}

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(arrayWas, elementToAdd) {
  
  arrayWas.unshift(elementToAdd)
  return arrayWas
}

function addElementToEndOfArray(arrayWas, elementToAdd){
  return [...arrayWas, elementToAdd]
}

function destructivelyAddElementToEndOfArray(arrayWas, elementToAdd){
  arrayWas.push(elementToAdd)
  return arrayWas
}

function accessElementInArray(accessArray, index) {
  return accessArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayWas, elementToTake){
  return arrayWas.shift(elementToTake)
}

function removeElementFromBeginningOfArray(arrayWas){
  return arrayWas.slice(1)
  
}
function destructivelyRemoveElementFromEndOfArray(arrayWas, elementToTake){
  arrayWas.pop(elementToTake)
  return arrayWas
}

function removeElementFromEndOfArray(arrayWas, elementToTake){
  return arrayWas.slice(0, arrayWas.length - 1)
}