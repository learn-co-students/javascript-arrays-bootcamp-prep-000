
var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element){
  var newArr = [element,...array]
  return newArr
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  var newArr=[...array,element]
  return newArr
}
function destructivelyAddElementToEndOfArray(array, element){
array.push(element)
return array
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift()
return array
}
function removeElementFromBeginningOfArray(array){
  newArr = array.slice(1)
  return newArr
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  newArr = array.slice(0,-1)
  return newArr
}
