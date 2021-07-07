var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

var array = [1];
var arrays =[1,2,3];

var chocolateBar = foo;

function addElementToBeginningOfArray(array,foo){
     
  return [foo, ...array];
  
}

function destructivelyAddElementToBeginningOfArray(array,element){
 array.unshift(element);
 
 return array
}

function addElementToEndOfArray(array,foo){
  return [...array,foo];
}

function destructivelyAddElementToEndOfArray(array,foo){
   array.push(foo);
   return array;
}

function accessElementInArray(array,index){
  return array[index];
} 

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(arrays){
  return arrays.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arrays){
 arrays.pop()
 return arrays;
}

function removeElementFromEndOfArray(arrays){
  return arrays.slice(0, arrays.length - 1)
}
