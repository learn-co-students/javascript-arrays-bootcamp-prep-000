
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  ["element", ...array];
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return destructivelyAddElementToBeginningOfArray
}

function addElementToEndOfArray(array, element){
 return  [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}


function accessElementInArray(array,index){
 return  array[index]
}

/*

function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   array;

}


function removeElementFromBeginningOfArray(array){
   array.slice(1);
   array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.pop();
  array;
}

function removeElementFromEndOfArray(array){
array.slice(0, array.length -1);
return array
}
*/
