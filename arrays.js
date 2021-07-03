var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  let newArray = array.slice()
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  let newArray = array.slice()
  newArray.push(element)
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function removeElementFromEndOfArray(array){
  let newArray = array.slice(0, array.length - 1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  let newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function accessElementInArray(array, index){
  return array[index]
}
