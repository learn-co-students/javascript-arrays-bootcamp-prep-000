var chocolateBars = ['snickers', 'hundred grand', 'kitkat',
 'skittles']

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToBeginningOfArray(array, element){
  var new_array = [element, ...array];
  return new_array;

 }

 function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array;
 }

 function addElementToEndOfArray(array, element){
   var new_array2 = [...array, element];
   return new_array2;
 }

 function accessElementInArray(array, index){
   return array[index];
 }

 function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   return array;
 }

 function removeElementFromBeginningOfArray(array){
   new_array3 = array.slice(1);
   return new_array3;
 }

 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
 }

 function removeElementFromEndOfArray(array){
   var new_array4 = array.slice(0, array.length-1);
   return new_array4;
 }
 
