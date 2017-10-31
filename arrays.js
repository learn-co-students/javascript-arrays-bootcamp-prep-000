var chocolateBars = ["chocolateBars","snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array, element){
var x = [element, ...array]
return x
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  var x = [...array,element]
  return x
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  var x = array[index]
  return x
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  var x = array.slice(1)
  return x
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var x = array.slice(0,array.length-1)
  return x 
}
