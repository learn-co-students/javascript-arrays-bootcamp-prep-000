var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]; 

var array=[];

function addElementToBeginningOfArray(array, element) { 
  var newArray = [element, ...array];   //spread operator
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);     // unshift onto the beginnings
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);  //push operator
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  array.shift();  //destructive method
  return array
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1); //slice method
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length-1);
  return newArray;
}



