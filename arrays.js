var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
 
function addElementToBeginningOfArray (array,element){
const array1 = [element,...array];
return array1;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}



function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array
}

function addElementToEndOfArray (array,element){
const array1 = [...array, element];
return array1;
}

function accessElementInArray (array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray (array, element) {
  const begArray = array.slice(1);
  return begArray;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(...array);
  return array
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray
}