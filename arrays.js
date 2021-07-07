var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 

var addElementToBeginningOfArray = function(array, element){
 var n = [element, ...array]
 return n; 
}


var destructivelyAddElementToBeginningOfArray = function(array, element){
array.unshift(element); 
return array; 
}

var addElementToEndOfArray = function(array, element){
  var n = [...array, element]; 
  return n; 
}
  
var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array; 
}

var accessElementInArray = function(array, index){
  return array[index]; 
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift(); 
  return array; 
}

var removeElementFromBeginningOfArray = function(array){
 var n = array.slice(1);
 return n; 
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop(); 
  return array; 
}

var removeElementFromEndOfArray = function(array){
   
  var n = array.slice(0, array.length - 1); 
  return n; 
}


