var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
/*
}
//function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
}*/

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
  
}
function removeElementFromBeginningOfArray(array){
  let firstVal = array.shift(); //modif the array 
  let result = [...array];// used it to create new array
 array.unshift(firstVal); // reverse modification
 return result;// return the new created array
}
function removeElementFromEndOfArray(array){
  let firstVal = array.pop(); //modif the array 
  let result = [...array];// used it to create new array
 array.push(firstVal); // reverse modification
 return result;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

