var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"  
];


  //adds to the beginning
function addElementToBeginningOfArray(array,element){
return [element,...array]
}


 //adds to the beginning destructively
 function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
 return array
 }
 
 
 //adds to the end
 function addElementToEndOfArray(array,element){
   return [...array,element]
 }
 //
 function destructivelyAddElementToEndOfArray(array,element){
   array.push(element)
   return array
 }
 
 function accessElementInArray(array, index){
   
   return array[index]
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
 return array
 }
 
 function removeElementFromBeginningOfArray(array){
   return [...array.slice(1)]
 }
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
 return array
 }
 
 function removeElementFromEndOfArray(array){
   return array.slice(0,2)
   
   
 }
