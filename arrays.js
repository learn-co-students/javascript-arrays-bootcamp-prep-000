var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var newArray2 = [...array, element]
  return newArray2
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
  var array2 = array.slice(1)
  return array2
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
 }
 
 function removeElementFromEndOfArray(array){
   var sliced = array.slice(0,array.length-1)
   return sliced
 }
 
/* 
 var array=[0,1,2,3,4]
 console.log(array.length)
 var sliced = array.slice(0,3)
 console.log(sliced) */