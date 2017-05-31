
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, elem){
  var newArray = array
  newArray = [elem, ...newArray]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, elem) {
 array.unshift(elem)
  return array
}

function addElementToEndOfArray(array, elem){
  var newArray = array
  newArray = [...newArray, elem]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, elem){
  array.push(elem)
  return array
}

function accessElementInArray(array, index){
  return array[index]
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
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
var newArray = array
newArray.pop()
return newArray

}
