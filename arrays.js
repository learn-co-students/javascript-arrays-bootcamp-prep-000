var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 

function addElementToBeginningOfArray (array, addedElement){
  var newArray = [addedElement, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, addedElement){
  array.unshift(addedElement);
   return array;
}

function addElementToEndOfArray (array, addedElement){
  var newArray = [...array, addedElement,];
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, addedElement){
  array.push(addedElement);
   return array;
}



function accessElementInArray(array, index){
  var specificElement = array[index]
  return specificElement
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}


function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1); 
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}


