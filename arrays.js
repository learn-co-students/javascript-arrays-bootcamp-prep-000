var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var arr = [1]

function addElementToBeginningOfArray(array, element){
  var myArray = [element,...array];
  return (myArray);
}
var arreglo = addElementToEndOfArray(arr, 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
var arreglo = destructivelyAddElementToBeginningOfArray(arr, 'foo')

function addElementToEndOfArray(array, element){
  var myArray = [...array,element]
  return myArray
}
var arreglo = addElementToEndOfArray(arr, 'foo')

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}


function accessElementInArray(array, index){
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.splice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.splice(0, array.length-1)
  return array
}
