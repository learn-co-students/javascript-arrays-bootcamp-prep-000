var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return[element, ...array]
}

function destructivelyAddElementsToBeginningOfArray(array, element) {
  array.unshift(element)

  return array
}

function addElementToEndOfArray(array, element){
            return[...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
              array.push[element]

    return array
}

function accessElementInArray(array, index) {
  return array([1]);
}

function destructivelyRemoveElementFromBeginningOfArray(element) {
  array.shift()

  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
