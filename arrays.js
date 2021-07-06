var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

/* var element = 0;
var array = [1,2,3]; */

function addElementToBeginningOfArray(array, element){
  new_array = [element,...array]
  return new_array
}


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
  array.pop()
  return array
}

function addElementToEndOfArray(array,element){
  new_array2=[...array, element]
  return new_array2
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  if (array.length > index)
  return array[index]
  else if (array.length <= index)
  return "undefined"
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array=array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

/* TODO: Define a function in arrays.js called removeElementFromEndOfArray that takes an array as its only argument and removes the last element. Your function should return the array without the last element, and it should not mutate the original array. */


function removeElementFromEndOlfArray(array){
  new_array3 =array.slice(0,array.length-1)
  return new_array3
}

