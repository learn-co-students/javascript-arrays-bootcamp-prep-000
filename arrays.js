var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
var array = [element, ...array]
return array
}

function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element)
return array
}

function addElementToEndOfArray(array,element){
array = [...array, element ];
return array;
}

function destructivelyAddElementToEndOfArray(array,element){
 array.push(element);
  return array;
}

function accessElementInArray(elements){
var elements = [element1, element2]
console.log[0];
}
var array = [element1, element2, element3]
function destructivelyRemoveElementFromEndOfArray (array){

  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array){
  array.pop();
  return array;
}
