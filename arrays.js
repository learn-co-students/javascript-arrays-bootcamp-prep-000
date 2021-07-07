var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles'];
var addElementToBeginningOfArray = function(array,element){

  var array1=[...array];
  array1.unshift(element);
  return array1;
  
}
var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array;
}

var destructivelyAddElementToEndOfArray = function(array,element){
  array.push(element);
  return array;
}

var addElementToEndOfArray = function(array,element){
  var array1 = [...array,element];
  return array1;
}

var accessElementInArray = function(array,index){
  return array[index];
  
}

var destructivelyRemoveElementFromBeginningOfArray= function(array){
  array.shift();
  return array;
  
}

var removeElementFromBeginningOfArray = function(array){
  array1 = array.slice(1);
  return array1;
}

var removeElementFromEndOfArray = function(array){
  var array1=array.slice(0,array.length-1);
  return array1;
  
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop();
  return array;
}

