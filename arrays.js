var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element);
    return array
 }

 function addElementToEndOfArray(array,element){
   return [array, element]
 }

 function destructivelyAddElementToEndOfArray(array,element){
   array.push(element)
  return array

 }

 function accessElementInArray(array, index){
   return array[index]
 }

 function removeElementFromBeginningOfArray(array){
   return array[index]
 }

 function removeElementFromEndOfArray(array){
   return array[index]
 }

 function removeElementFromBeginningOfArray(array){
  array.pop();
  return array
 }

 function removeElementFromEndOfArray(array){
   newArray = array.slice(0,-1);
   return newArray
}
