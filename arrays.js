var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

///////////////////////////////////////

function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return(newArray)
}
addElementToBeginningOfArray(['1'], 'foo')

///////////////////////////////////////////

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
  return(array)
}
  

destructivelyAddElementToBeginningOfArray([1], 'foo')

///////////////////////////////////////////////////

function addElementToEndOfArray(array, element){
  newArray = [...array, element]
  return(newArray)
}
addElementToEndOfArray([1], 'foo')

/////////////////////////////////////////////////////

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return(array)
}

destructivelyAddElementToEndOfArray([1], 'foo')

////////////////////////////////////

function accessElementInArray(array,index){
  return array[index]
}
accessElementInArray([1,'foo'],0)
////////////////////

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
///////////////////////////

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

////////////////////////////
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
////////////////////////

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}