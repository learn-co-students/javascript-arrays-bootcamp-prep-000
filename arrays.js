
//var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//const chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element){

  let newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  let newArrayDelete = [...array, element];
  return newArrayDelete;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array){
  let newArray = [...array]
  return newArray.slice(1);
}


function destructivelyRemoveElementFromEndOfArray (array) {
  //return array.slice(0,array.length-1);
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  let newArray = [...array];
  newArray.pop();
  return newArray;
}
