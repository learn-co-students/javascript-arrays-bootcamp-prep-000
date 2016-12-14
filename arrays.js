chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  addElementToBeginningOfArray = [element,...array]
return addElementToBeginningOfArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
array = [array];
array = [element, ...array];
return array ;
 }
