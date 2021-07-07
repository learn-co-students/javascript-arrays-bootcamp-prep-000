var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newChocolateBars = []

function addElementToBeginningOfArray(array, element){
 return [element, ...array];
}

function descructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementToBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array){
  return array.splice(0, array.length - 1 );
}

console.log(addElementToBeginningOfArray(chocolateBars, [1]))
