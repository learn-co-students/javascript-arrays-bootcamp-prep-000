var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(){
  var array1 = [1]
  array1 = ["foo",...array1]
  return array1
}



function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(){
  var array3 = [1]
  array3 = [...array3,"foo"]
  return array3
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}

function accessElementInArray(array, index) {
  return array[index]
}
