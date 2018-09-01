var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newEle){
  var newArray = [newEle, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, newEle){
  array.unshift(newEle);
  return array;
}

function addElementToEndOfArray(array, newEle){
  var newArray = [...array, newEle];
  return newArray
}

function destructivelyAddElementToEndOfArray(array, newEle){
  array.push(newEle);
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
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
