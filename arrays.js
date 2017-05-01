var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  //var element = [element];
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element){
  //var newarray = array.unshift(element);
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  //var newElement = [element];
  return [...array, element];
}


function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array;
}

function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
array = array.slice(0, array.length-1);
return array;
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}
