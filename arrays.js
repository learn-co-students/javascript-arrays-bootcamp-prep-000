//1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//2_1
function addElementToBeginningOfArray(array, element){
array = [element,...array]
return(array);
}

//2_2

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

//3_1

function addElementToEndOfArray(array, element){
array = [1,element];
return(array);
}

//3_2

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

//4

function accessElementInArray(array, index){
  array = [1,2,3];
  return(array[2]);
}

//5

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0);
  return(array);
}

//6 

function removeElementFromBeginningOfArray(array){
  array = [1,2,3];
  return(array.slice(1));
}

//7

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return(array);
}

//8 

function removeElementFromEndOfArray(array){
  array = [1,2,3]
  return(array.slice(0,array.length - 1))
}