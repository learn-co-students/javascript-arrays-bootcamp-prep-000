var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift("foo");
  return array;
}
function addElementToEndOfArray (array, element){
  array = [...array,"foo"];
    return array;
}
function destructivelyAddElementToEndOfArray (array, element){
   array.push("foo");
    return array;
}

var array = [1, 2, 3];

function accessElementInArray (array, index){
  array = [1, 2, 3];
    return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray (array){ 
  array.shift();
  return array
}
function removeElementFromBeginningOfArray (array){
  array = [1, 2, 3];
    return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1);
}