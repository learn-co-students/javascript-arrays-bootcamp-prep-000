var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];
var array2 =[];
var array3 = [];
var array4 = [];
var array5 = [];

function addElementToBeginningOfArray(array,element){
 var array2 = [element,...array];
 return (array2);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return (array);
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift();
  return(array);
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return (array);
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop();
  return (array);
}

function addElementToEndOfArray(array, element){
  array3 = [...array, element];
  return (array3);
}

function accessElementInArray(array, index){
  return array[index];
  
}

function removeElementFromBeginningOfArray(array){
  array4 = array.slice(1);
  return (array4);
  
}

function removeElementFromEndOfArray(array){
array5 = array.slice(0, array.length - 1);
return (array5);
}