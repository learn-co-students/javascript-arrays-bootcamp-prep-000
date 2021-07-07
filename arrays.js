var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray(array,element){
  newArray = [element,...array];
  return newArray
  
}



var destructivelyAddElementToBeginningOfArray = function(array,element){
  array.unshift(element);
  return array 
}


var addElementToEndOfArray = function(array,element){
  newArray = [...array,element];
  return newArray

}


var destructivelyAddElementToEndOfArray = function(array,element){
  array.push(element);
  return array

}

var accessElementInArray = function(array,index) {
  return array[index];
}


var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift();
  return array
}


var removeElementFromBeginningOfArray = function(array) {
  return array.slice(1);
}


var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array
}

var removeElementFromEndOfArray = function(array) {
  return array.slice(0,array.length-1);
}
