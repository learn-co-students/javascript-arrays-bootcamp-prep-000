var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

 
 function addElementToBeginningOfArray(array,elementToAdd) {
  newArray = [elementToAdd,...array]
  return newArray;
 }
 
 function destructivelyAddElementToBeginningOfArray(array,elementToAdd) {
   array.unshift(elementToAdd);
   return array;
 }
 
 function addElementToEndOfArray(array,addToEnd) {
   newArray = [...array,addToEnd];
   return newArray;
 }
 
 function destructivelyAddElementToEndOfArray(array,addToEnd) {
   array.push(addToEnd);
   return array;
 }
 
 
 function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift(0);
   return array;
 }
 
 function accessElementInArray(array,index) {
   return array[index];
 }
 
function removeElementFromBeginningOfArray(array) {
 newArray = array.slice(1)
 return newArray 
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return array
}

function removeElementFromEndOfArray (array) {
newArray = array.slice(0,array.length - 1)
return newArray
}