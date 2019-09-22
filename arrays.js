var choclateBars = ['snickers', 'hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element){
  return[...array, element]
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
}
function accessElementInArray(array,element){
  return(array[1])
}
function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array,element){
  array.slice(element)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop(element)
  return array
  
}
function removeElementFromEndOfArray(array,element){
  array.slice(element)
  return array
}

  