var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
var new1 = [element, ...array];
return new1
}

function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element);
return array
}

function addElementToEndOfArray(array,element){
var new1 = [...array, element]
return new1
}

function destructivelyAddElementToEndOfArray(array,element){
array.push(element);
return array
}

function accessElementInArray(array,index){
  return(array[index]);
 }

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array
}

function removeElementFromBeginningOfArray(array){
job= array.slice(1);
return job
}
  
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array){
  new1 = array.slice(0,array.length-1);
  return new1
}












