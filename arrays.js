var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
return array
}

function addElementToBeginningOfArray(array, element){
  var new_array = [element, array[0]]
  return new_array
}

function addElementToEndOfArray(array,element){
  var new_array = [array[0], element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, element){
  return array[2]
}
function removeElementFromBeginningOfArray(array, element) {
  array.shift()
  return array
}
function removeElementFromEndOfArray(array, element) {
  array.pop()
  return array 
}
