
var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]


function addElementToBeginningOfArray(arr, element){
  var newArr = [element,...arr]
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

/*
**TODO**: Define two more functions, `addElementToEndOfArray` and
`destructivelyAddElementToEndOfArray`. These functions also take two
arguments, an array and an element to add to the end of the array.
`addElementToEndOfArray` **should not** alter the original array;
`destructivelyAddElementToEndOfArray` **should** alter the original array.
*/
function addElementToEndOfArray(arr,element){
  var newArr = [...arr,element]
  return newArr
}
function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element)
  return arr;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);

}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}
