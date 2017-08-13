var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray (array, element){
  var chocolateBars= [element, ...array]
 return chocolateBars
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}
