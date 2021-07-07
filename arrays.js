/*
var ingridient1 = "bread";
var ingridient2 = "mild cheese";
var ingridient3 = "sharp cheese";
var ingridient4 = "butter";
var ingridient5 = "tomato";
var ingridient6 = "garlic";
*/

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, e) {
   array = [e,...array];
   return array;
}

function destructivelyAddElementToBeginningOfArray(array, e) {
   array.unshift(e);
   return array;
}

function addElementToEndOfArray(array, e){
  array = [...array,e];
   return array;
}

function destructivelyAddElementToEndOfArray(array, e){
   array.push(e);
   return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();
   return array;  
} 

function removeElementFromBeginningOfArray(array){
  /*array.slice(1);*/
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1);
}





