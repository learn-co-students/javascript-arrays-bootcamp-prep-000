chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
    return [element,...array]
}


function destructivelyAddElementToBeginningOfArray(array, element){
  var array = array
    array.unshift(element)
     return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element){
  var array = array
    array.push(element)
      return array
}
function accessElementInArray(array, index){
  var array = array
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
var array = array
  return array.shift(element)
}

function removeElementFromBeginningOfArray(array){
var array = array
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
var array = array
  return array.slice(0,array.length-1)
}
