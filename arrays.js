var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(existingArray, newElement){
   var newArray = [newElement, ...existingArray]
   return newArray
}
function destructivelyAddElementToBeginningOfArray(existingArray, newElement){
  existingArray.unshift(newElement)
  return existingArray
}
function addElementToEndOfArray(existingArray, newElement){
  var new1Array = [...existingArray, newElement]
  return new1Array
}
function destructivelyAddElementToEndOfArray(existingArray, newElement){
   existingArray.push(newElement)
   return existingArray
}
function accessElementInArray(existingArray, index){
 return existingArray[index] 
}
function destructivelyRemoveElementFromBeginningOfArray(existingArray){
   existingArray.shift()
   return existingArray
}
function removeElementFromBeginningOfArray(existingArray){
  var new2Array = existingArray.slice(1)
  return new2Array
}
function destructivelyRemoveElementFromEndOfArray(existingArray){
  existingArray.pop()
  return existingArray
}
function removeElementFromEndOfArray(existingArray){
  var new3Array = existingArray.slice(0, existingArray.length -1)
  return new3Array
}