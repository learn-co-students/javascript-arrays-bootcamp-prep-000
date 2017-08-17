var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray (array, element){
  var chocolateBars= [element, ...array]
 return chocolateBars
}

function destructivelyAddElementToEndOfArray (array, element){
array.push(element)
return array
}

function addElementToEndOfArray (array, element){
var chocolateBars= [...array, element]
return chocolateBars
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function accessElementInArray (array, index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array, element){
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray (array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
array.pop(1)
return array
}

function removeElementFromEndOfArray (array){
array.slice(0, array.length-1)
return array.slice(0, array.length-1)
}
