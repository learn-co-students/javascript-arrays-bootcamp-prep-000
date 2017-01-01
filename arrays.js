var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  var addedToArray = [element, ...array]
  return addedToArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var addedToArray = [...array, element]
  return addedToArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}

function removeElementFromEndOfArray(array, element){
  array.pop(element)
  return array
}
