
//var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array, element){

  let newArray = [element, ...array]];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}


function addElementToEndOfArray(array, element){
  let newArrayDelete = [...araay, element];
  return newArrayDelete;
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  return array.shift();
}

function removeElementFromBeginningOfArray (array){
  let newArray = [...array]
  return newArray.slice(1);
}


function destructivelyRemoveElementFromEndOfArray (array) {
  return array.slice(0,array.length-1);
}
