chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
 return array
}
function addElementToEndOfArray(array, element){
  var newArray = [...array, element]
  return newArray
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
  return array.slice(1)
  /* since 0 is the beginning of the array, choosing slice(1) selects every element in the array starting from the second element, thus removing the first element.*/
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var newArray = array
  return newArray.slice(0, newArray.length - 1)
  // selects the entire array from start to end but leaves the final part off
}