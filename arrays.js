var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  var elements =[1];
  var elements2 = ["foo", ...elements];
  return(elements2);
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift("foo");
return(array);
}

function addElementToEndOfArray(array,element){
  var elements =[1];
  var elements2 = [...elements,"foo"];
  return(elements2);
}

function destructivelyAddElementToEndOfArray(array, element){
array.push("foo");
return(array);
}

function accessElementInArray(array, index) {
  var arrays =[1, 2, 3]
  return array[2];

}
function destructivelyRemoveElementFromBeginningOfArray(array){ 
  array.shift(); 
  return array;
}
function removeElementFromBeginningOfArray(array) {
var array1 = [1, 2, 3];
var array2 = array1.slice(1);
return array2;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  var array3 = [1, 2, 3];
  var array4 = array3.slice(0,array3.length - 1);
  return array4;
  
}