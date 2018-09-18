var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

//return new array and not modify orig
function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array];
  return newArray;
}

//return modified original array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  let newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  let newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  let newArray = array.slice(0, array.length - 1);
  return newArray;
}
