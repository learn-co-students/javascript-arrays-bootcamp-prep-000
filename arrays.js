function removeElementFromEndOfArray(array){
  var newArray = array
  newArray.pop()
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = array
  newArray.shift()
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array,element){
  var newArray = array
  newArray.push(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array,element){
  var newArray = array
  newArray.unshift(element)
  return newArray
}

var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
