
var chocolateBars;["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(a,b){
 return [b,...a]
  
}
function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b)
  return a
}
function addElementToEndOfArray(a, b){
return [...a, b]
}
function destructivelyAddElementToEndOfArray(a, b){
  a.push(b)
  return a
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array,index){
array.shift()
return array
}
function removeElementFromBeginningOfArray(array,index){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array, index){
array.pop()
return array
}
function removeElementFromEndOfArray(array, index){
 return array.slice(0, array.length -1)
  
}
 