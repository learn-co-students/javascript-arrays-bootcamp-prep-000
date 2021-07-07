var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elemnt){
  return [element, ...array];
};

function destructivelyAddElementToBeginningOfArray(array, elemnt){
  return array.unshift(element);
};

function addElementToEndOfArray(array, elemnt){
  return [...array, element];
};

function destructivelyAddElementToEndOfArray(array, elemnt){
  return array.push(element);
};

function accessElementInArray(array, index){
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(array[0]);
};

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
};

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
};

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
};
