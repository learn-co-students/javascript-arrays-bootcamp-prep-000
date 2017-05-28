var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){

var addElement = [element, ...array];
return addElement;

}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;

}

function addElementToEndOfArray(array,element){
  var endOfArray = [...array, element];
  return endOfArray;

}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;

}

function accessElementInArray(array,index){

  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){

array.shift();
return array;
  
}

function removeElementFromBeginningOfArray(array){

var begArray = array.slice(1);
return begArray;
  
}

function removeElementFromEndOfArray(array){
var newArray =  array.slice(0, array.length-1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}