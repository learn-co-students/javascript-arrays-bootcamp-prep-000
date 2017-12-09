var chocolateBars = ["snickers", "hundred grand" , "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(arr , element){
  
  arr.unshift(element);
  
  return arr;
}

function addElementToBeginningOfArray(arr , element){
  
  return [element , ...arr]
}

function addElementToEndOfArray(array , element){
  
  return [...array , element]
  
}

function destructivelyAddElementToEndOfArray (array, element){
  
  array.push(element);
  
  return array;
  
}

function accessElementInArray(array, index){
  
  return array[index];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  
  array.shift();
  
  return array;
}

function removeElementFromBeginningOfArray(array){
  
  return array.slice(1);
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array, element){
  return array.slice(0,array.length - 1);
}