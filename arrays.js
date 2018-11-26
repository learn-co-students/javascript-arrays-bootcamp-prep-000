var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

const array = [1];
const element = "foo";
function addElementToBeginningOfArray(array, element){
  return ["foo", ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element){
  return[...array, "foo"];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo");
  return array;
}

function accessElementInArray(array, index){
   array = [1,2,3];
   return array[2];
}


 var array1 = [1,2,3];
function destructivelyRemoveElementFromBeginningOfArray(array1){
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1){
  return array1.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(){
 const array = [1,2,3];
 array.pop();
 return array;
}

function removeElementFromEndOfArray(){
  const array = [1,2,3];
  return array.slice(0, array.length-1);
}
