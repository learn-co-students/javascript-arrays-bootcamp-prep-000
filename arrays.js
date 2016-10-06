var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (arr , element){
  var r =  [element, ...arr]
  return r
}
function destructivelyAddElementToBeginningOfArray (arr , element){
   arr.unshift(element)
   return arr
}
function addElementToEndOfArray (arr , element){
  var r =  [...arr, element]
  return r
}
function destructivelyAddElementToEndOfArray (arr , element){
  arr.push(element)
  return arr
}

function accessElementInArray ( arr, i){
  return arr[i]
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}
function removeElementFromBeginningOfArray(arr){
  var p = arr.slice(1)
  return p
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1)
}
