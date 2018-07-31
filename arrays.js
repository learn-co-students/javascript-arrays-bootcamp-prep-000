var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, and `skittles`]; 

var array=[];

function addElementToBeginningOfArray(array, element) { 
  var newArray = [element, ...array];   //spread operator
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);     // unshift onto the beginnings
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push[element];  //push operator
  return array
}