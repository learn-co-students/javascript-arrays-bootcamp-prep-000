var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,n){
  return [n,...array]
}
function destructivelyAddElementToBeginningOfArray(array,n){
  array.unshift(n)
  return array
}
function addElementToEndOfArray(array,n){
  return [...array,n]
}
function destructivelyAddElementToEndOfArray(array,n){
  array.push(n)
  return array
}
function accessElementInArray(array,n){
  return array[n]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
