chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  addElementToBeginningOfArray = [element,...array]
return addElementToBeginningOfArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
//array = [array];
array.unshift(element);
return array ;
 }
function addElementToEndOfArray (array, element){
addElement = [array,...element];
return addElement;
}

function destructivelyAddElementToEndOfArray(){
  array.push(element);
  return array;
}
