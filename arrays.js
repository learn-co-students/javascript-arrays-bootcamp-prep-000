var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var addElementToBeginningOfArray = ['foo', 1]; 
  return addElementToBeginningOfArray; 
}
//GOOD ABOVE 


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);	  
  return array;	
  
}	
 function addElementToEndOfArray(array, element)  {
  return [...array, element];	 
 	}
 	
function destructivelyAddElementToEndOfArray(array, element) {	
  array.push(element);
  return array;
}
//GOOD ABOVE




function accessElementInArray() {
  
}

function destructivelyRemoveElementFromBeginningOfArray() {
  
}

function removeElementFromBeginningOfArray() {
  
}

function destructivelyRemoveElementFromEndOfArray() {
  
}

function removeElementFromEndOfArray() {
  
}










