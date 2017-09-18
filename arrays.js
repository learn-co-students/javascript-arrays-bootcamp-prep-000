var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) =  {
  var newArray = array.unshift(element)
return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element) = {
  array = array.unshift(element)
  return array
}
