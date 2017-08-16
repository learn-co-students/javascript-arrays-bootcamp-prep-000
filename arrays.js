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
