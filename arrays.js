var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){

array[1]=array[0];
  array[0]=element;
  return array;




  }
function addElementToBeginningOfArray(array, element){
 return [element, ...array];

}

function destructivelyAddElementToEndOfArray(array, element){
  array[array.length]=element;
 return  array;
}
function addElementToEndOfArray(array, element){
  return [ ...array, element];
}
function accessElementInArray(array,index){
  return array[index];

}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
function removeElementFromBeginningOfArray(array){
var t =[]
  return  t = array.slice(1);
}
function removeElementFromEndOfArray(array){
  var p=[];
  return p = array.slice(0, array.length-1);

}
