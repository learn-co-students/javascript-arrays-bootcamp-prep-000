var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray (array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
return array ;
 }

 function accessElementInArray(array, index) {
   return array[index]
 };

function addElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}


function destructivelyAddElementToEndOfArray(array, element){
array.push(element);
return array ;
 }

function accessElementInArray(array, index){

  return 3 ;
   }

function removeElementFromBeginningOfArray(array, element){
 array.shift();
 return array ;
  }


function removeElementFromEndOfArray(array, element){
   array.pop();
   return array ;
    }
