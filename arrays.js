chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
element = 2;


function addElementToBeginningOfArray(array, element){
  
 arrayNew = [element, ...array];
  return arrayNew;
}


function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  
 arrayNew = [...array, element];
  return arrayNew;
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}


function accessElementInArray(array, index){

return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
  }
  
  function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
  }
  
  
 function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
   }
   
   function removeElementFromEndOfArray(array){
     array1 = array.slice(0, array.length-1);
     return array1;
   }
   
   
   
  
  
  
  
  
  
