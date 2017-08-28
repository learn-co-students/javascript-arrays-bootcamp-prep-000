var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element){
  new_array = [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop
}
