var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  
    return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  
  var alteredArray = array.unshift(element);
  
    return array;
  
}

function addElementToEndOfArray(array,element){
  
    return [...array, element];
  
}


function destructivelyAddElementToEndOfArray(array,element){
  
  var alteredSecondArray = array.push(element);
  
  return array
  
}

function accessElementInArray(array, index){
  
 return array[index];  

  
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  
  
 array.shift();
 
 return array.slice();
  
}

function removeElementFromBeginningOfArray(array){
  
  var sliceArray = array.slice(1);
  
  return sliceArray;
  
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  
var removeLastElement = array.pop();

return array; 
  
}


function removeElementFromEndOfArray(array){
  
var sliceLastElement = array.slice(0, array.length-1);

 return sliceLastElement;
  
  
}




