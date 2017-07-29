var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, newElement) {
  secondArray = [newElement, ...array]
  return secondArray
}
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement)
  return array
}

function addElementToEndOfArray(array, newElement) {
  secondArray = [...array, newElement]
  return secondArray
}
function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement)
  return array
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  secondArray = array.slice(1)
  return secondArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  secondArray = array.slice(0, array.length - 1)
  return secondArray
}

function done() {
  console.log(addElementToBeginningOfArray(chocolateBars, "crunch"))
  console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "crunch"))
  console.log(addElementToEndOfArray(chocolateBars, "runts"))
  console.log(destructivelyAddElementToEndOfArray(chocolateBars, "runts"))
  console.log(accessElementInArray(chocolateBars, 2))
  console.log(removeElementFromBeginningOfArray(chocolateBars))
  console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars))
  console.log(removeElementFromEndOfArray(chocolateBars))
  console.log(destructivelyRemoveElementFromEndOfArray(chocolateBars))
  return
}

done()
