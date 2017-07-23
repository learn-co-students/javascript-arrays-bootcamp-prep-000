var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  array[array.length] = element;
  return array;
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var arr = array.slice(-(array.length-1))
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var arr = array.slice(0,array.length-1);
  return arr;
}
