var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, el) {
  array.unshift(el);
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array.splice(0, 1, el);
}

function addElementToEndOfArray(array, el){
  array.push(el);
}

function destructivelyAddElementToEndOfArray(array, el){
  array.splice(array.length-1, 1, el);
}

function accessElementInArray(array, index){
  array.splice(index, 1);
}

function removeElementFromBeginningOfArray(array){
  array.shift();
}

function removeElementFromEndOfArray(array){
  array.pop();
}