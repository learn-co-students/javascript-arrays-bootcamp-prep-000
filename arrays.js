//initial variable declaration

var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

//first function

function addElementToBeginningOfArray(array,element){
  return[element,...array]
}

//second function

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

//third function 

function addElementToEndOfArray(array,element){
 return [...array,element]
}

//fourth function

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

//fifth function

function accessElementInArray(array, index){
  return array[index]
}

//sixth function

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

//seventh 

function removeElementFromBeginningOfArray(array){
  return array.slice(0,array.length - 1)
}
