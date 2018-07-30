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
array = [...array,element];
return(array);
}

//3_2

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

//4

function accessElementInArray(array, index){
  return array[index];
}

//5

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return(array);
}

//6 

function removeElementFromBeginningOfArray(array){
  return(array.slice(1));
}

//7

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return(array);
}

//8 

function removeElementFromEndOfArray(array){
  return(array.slice(0,array.length - 1))
}