var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

 function addElementToBeginningOfArray(array, element) {
   var newArray = [element, ...array];
   return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var newArray2 = [...array,element];
  return newArray2;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
  
}
