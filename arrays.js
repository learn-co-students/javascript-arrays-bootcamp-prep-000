var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  //MUTATE
//push elements ono the END of array
//unshift elements onto the beginning of an array
  
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
  return  array
}


function addElementToEndOfArray(array, element){
  newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, n){
  return array[n]
}

//shift removes an element from the beginning of an array

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1)
  return newArray
}


