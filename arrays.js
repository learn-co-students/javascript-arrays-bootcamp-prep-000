var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  return [element, ...array];

}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.unshift(element);

  return array;

}

function addElementToEndOfArray(array, element){

 array.push(element);

 return array;

}

function destructivelyAddElementToEndOfArray(array, element){

  array.push(element);
  return array;
}

function accessElementInArray(array, index){

  return array[index];

}

function destructivelyRemoveElementFromBeginningOfArray(array, element){

  return array.unshift(element);

}

function removeElementFromBeginningOfArray(array) {

 var newArray = array.slice(1);
 return newArray;

}

function destructivelyRemoveElementFromEndOfArray(array){

var newArray = array.slice(0, destructivelyRemoveElementFromEndOfArray - 1);
return newArray;

}

function removeElementFromEndOfArray(array){

  var newArray = array;
  return newArray.slice(0, newArray.length - 1);

}
