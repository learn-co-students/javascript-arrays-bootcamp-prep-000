var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
var array = []

// Add element beginning and doesnt alter the original array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  
}
//Add element beginning and alters the original array 
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

//Add element at end and doesnt alter the original array
function addElementToEndOfArray(array,element){
  return [...array,element]
}
//Add element at end and alters the original array
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array,index){
  return array[index]
}
//Removes the first element and alters the array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
//Removes the first element and doesnt alter the array
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
  
}
//Removes the last element and alters the array
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
//Removes the last element and doesnt alter the array
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1)
  
}
