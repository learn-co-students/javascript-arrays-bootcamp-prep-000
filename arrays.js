 var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]
 
 
 function addElementToBeginningOfArray(array,element){
   [element...,array];
   return array
 }

function destructivelyAddElementToBeginningOfArray(array, element){
  
  return array.unshift(element)
}

