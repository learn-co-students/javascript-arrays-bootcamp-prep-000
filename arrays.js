var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  return [element,... array];
}
function destructivelyAddElementToBeginningOfArray(array,element){
	array.unshift(element);
	return array
}
function addElementToEndOfArray(array,element){
	return [...array,element];
}
function destructivelyAddElementToEndOfArray(array,element){
	array.push(element);
	return array
}
function accessElementInArray(array,n){
	return(array[n]);
}
function destructivelyRemoveElementFromBeginningOfArray(array){
	array.shift()
	return array
}
function removeElementFromBeginningOfArray(array){
	array.slice(1)
	newArray = (array.slice(1));
	return newArray
}
function destructivelyRemoveElementFromEndOfArray(array){
	array.pop()
	return array
}
function removeElementFromEndOfArray(array){
   	newArray = array.slice(0, array.length - 1);
  	return newArray
}



