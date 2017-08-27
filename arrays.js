chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  var arrayNew = [element, ...array]
  return arrayNew
}

function destructivelyAddElementToBeginningOfArray(array, element){

  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  newArray = array.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, x){
    return array[x]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.slice(0, array.length -1)
  return array
}
