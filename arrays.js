var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
 let newArray=[element, ...array]
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){

  let newArray = array;
   newArray.unshift(element);
   return newArray;
}

function addElementToEndOfArray(array, element){
  let newArray=[...array, element]
  return newArray;

}

function destructivelyAddElementToEndOfArray(array, element){

  let newArray = array;
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  var first = array[index]
  return first;
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
   array.shift();
   return array;
}

function removeElementFromBeginningOfArray(array){
   let newArray= array.slice(1);
   return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  let newArray= array.slice(0, array.length - 1)
  return newArray;
}
