var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  array = [...array,element]
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return(array[index])
}
//everything above this line should work?
//everything below this line needs revisiting

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
  }
function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop(element)
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}