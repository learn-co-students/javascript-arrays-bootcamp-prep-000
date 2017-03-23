var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat',  'skittles']
function addElementToBeginningOfArray(array, element){
array.unshift('foo')
return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift('foo')
return array;
}
function addElementToEndOfArray(array, element){
  array.push('foo')
  return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo')
  return array;
}
function accessElementInArray(array, index){
  return array, 3
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.shift(1)
  return array
}
function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
