var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementsToBeginningOfArray(array, element) {
  array.unshift(element, [1])

  return array
}

function addElementToEndOfArray(array, element){
    return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
    array.push(element)

    return array
}

function accessElementInArray(array, index) {
  return array[index [1]]
}

function destructivelyRemoveElementFromBeginningOfArray(element) {
  array.shift()

  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()

  return array

}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
