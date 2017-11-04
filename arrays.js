 var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  var newArray[]=array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){

  var array []=array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray[]=array.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  var array []=array.push(element);
  return array;
}

function accessElementInArray(array, index){
  var indexValue=array[index];
  return indexValue;
}

function destructivelyRemoveElementFromBeginningOfArray(array){

  var array=array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArray[]=array.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
  var array[]=array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray[]=array.pop();
  return newArray;
}
