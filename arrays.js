chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element) {
	  return [...array, element]
	}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element) {
	  return [element, ...array]
	}

function destructivelyRemoveElementFromBeginningOfArray(array) {
	  array.shift()
	  return array
}
	
	
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function removeElementFromBeginningOfArray(array){


accessElementInArray = function(array, index) {
	  return array[index]
}
	
// removeElementFromEndOfArray = 	function(array){
// 	  return array.shift()
// }



function destructivelyRemoveElementFromEndOfArray(array){
	  array.pop()
	  return array
  
}


	function removeElementFromEndOfArray(array) {
	  return array.slice(0, array.length - 1)
	  
}
	