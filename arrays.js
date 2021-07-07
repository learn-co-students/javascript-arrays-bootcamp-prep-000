

 var chocolateBars = [ "snickers","hundred grand", "kitkat","skittles" ];

 function addElementToBeginningOfArray(array,value) {
   return [value,...array];
 }


 function destructivelyAddElementToBeginningOfArray(array,value) {
    array.unshift(value); //this mutate the elements in the array
    return array;
 }

function addElementToEndOfArray(array, elem) {

   return [...array,elem];
}

function destructivelyAddElementToEndOfArray(array,elem) {
   array.push(elem);
   return array;

}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift(); //this is distructive,
    return array;

}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop() // this is distructive
   return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1); //this does not mutate the array
}
