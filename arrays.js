var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arg1, arg2){
  arg1.unshift(arg2)
  return arg1
}

function destructivelyAddElementToBeginningOfArray(arg1, arg2){
  var newArray = addElementToBeginningOfArray(arg1, arg2)
  return newArray
}

function addElementToEndOfArray(arg1, arg2){
  arg1.push(arg2)
  return arg1
}

function destructivelyAddElementToEndOfArray(arg1, arg2){
  var newArray = addElementToEndOfArray(arg1, arg2)
  return newArray
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(0)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(-2)
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
