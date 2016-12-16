function addElementToBeginningOfArray(array,element){
  var array1 = array
  array1.unshift(element)
  return array1
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  var array1 = array
  array1.push(element)
  return array1
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return array[index]
}
function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

var chocolateBars = ["`snickers`, `hundred grand`, `kitkat`, `skittles`"]
