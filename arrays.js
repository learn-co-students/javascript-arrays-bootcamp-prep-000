var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
  ]
  
function addElementToBeginningOfArray(arrayElements, element) {
  return [element, ...arrayElements]
}

function destructivelyAddElementToBeginningOfArray(arrayElements, element) {
  arrayElements.unshift(element)
  return arrayElements
}

function addElementToEndOfArray (arrayElements, element) {
  return [...arrayElements, element]
}

function destructivelyAddElementToEndOfArray (arrayElements, element) {
  arrayElements.push(element)
  return arrayElements
}

function accessElementInArray(arrayElements, index) {
  return arrayElements[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayElements) {
  arrayElements.shift()
  return arrayElements
}

function removeElementFromBeginningOfArray(arrayElements) {
  var newArray = arrayElements.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arrayElements) {
  arrayElements.pop()
  return arrayElements
}

function removeElementFromEndOfArray(arrayElements) {
  var newArray = arrayElements.slice(0, arrayElements.length - 1)
  return newArray
}




