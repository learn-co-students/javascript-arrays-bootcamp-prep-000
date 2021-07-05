var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array, element){
var arr = array
var arr2 = [element, ...array]
return arr2
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var arr = array
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(array, element){
var arr = array
var arr2 = [...arr, element]
return arr2
}

function destructivelyAddElementToEndOfArray(array, element){
  var arr = array
  arr.push(element)
  return arr
}

function accessElementInArray(array, i){
  var arr = array
  var result = arr[i]
  return result
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var arr = array
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(array){
  var arr = array
  arr = arr.slice(1)
  return arr
}

function destructivelyRemoveElementFromEndOfArray(array){
   var arr = array
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(array){
  var arr = array
  arr = arr.slice(0, arr.length - 1)
  return arr
}










