
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  arr = [element, ...array];
  
  return arr;
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
   
  array.unshift(element);
  
  return array;
}

function addElementToEndOfArray(array, element){
  var list = [...array, element];
  
  return list;
  
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
   var remoElement = array.slice(1);
   return remoElement;
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
 }
 
 function removeElementFromEndOfArray(array){
   var remoEnd = array.slice(0, array.length -1);
   return remoEnd;
   
 }