var chocolateBars = ["snickers", "1hundred grand", "kitkat", "skittles"]; 

function addElementToBeginningOfArray(array,item) {
  return Array(item).concat(array);
}

function destructivelyAddElementToBeginningOfArray(array,item) {
  array.unshift(item);
  return array;
}

function addElementToEndOfArray(array,item) {
  return array.concat(item);
}

function destructivelyAddElementToEndOfArray(array,item) {
  array.push(item);
  return array;
} 

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}   

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1);
}
