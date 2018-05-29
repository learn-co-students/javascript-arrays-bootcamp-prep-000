 //1) arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles":
 var chocolateBars = ("snickers", "hundred grand", "kitkat", "skittles")
     

//2) arrays addElementToBeginningOfArray(array, element) adds an element to the beginning of an array:
function addElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
     
//3) arrays addElementToBeginningOfArray(array, element) does not alter the original array:
function addElementToBeginningOfArray(array, element){
  return [element,...array]
}     
//=================
//4) arrays destructivelyAddElementToBeginningOfArray(array, element) adds an element to the beginning of an array:
function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element)
    return array
    return array.unshift(element)
}    



//6) arrays addElementToEndOfArray(array, element) adds an element to the end of an array:
function addElementToEndOfArray(array, element){
  return array.push(element)
}      

//7) arrays addElementToEndOfArray(array, element) does not alter the original array:
function addElementToEndOfArray(array, element){
  return [...array,element]
}     

//8) arrays destructivelyAddElementToEndOfArray(array, element) adds an element to the end of an array:
/*function destructivelyAddElementToEndOfArray(array, element){
  return [...array, element]
}    */ 

//9) arrays destructivelyAddElementToEndOfArray(array, element) alters the original array:
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}     
 
//10) arrays accessElementInArray(array, index) accesses the element in array at the given index:
function accessElementInArray(array, index){
  return array[index]
}    
    
//11) arrays destructivelyRemoveElementFromBeginningOfArray(array) returns the array with the first element removed:
/*function  destructivelyRemoveElementFromBeginningOfArray(array){
  return array.slice(1)
  
} */   

//12) arrays destructivelyRemoveElementFromBeginningOfArray(array) alters the original array:
function  destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
  array
}    

//13) arrays removeElementFromBeginningOfArray(array) removes the first element from the array:
function  removeElementFromBeginningOfArray(array){
  return array.slice(-0)
}  

//14) arrays removeElementFromBeginningOfArray(array) does not alter the original array:
function  removeElementFromBeginningOfArray(array){
  return array.slice(1) 
  array
}  

//15) arrays destructivelyRemoveElementFromEndOfArray(array) returns the array with the last element removed:
/*function destructivelyRemoveElementFromEndOfArray(array){
  return array.slice(0, array.length -1)
}  */

//16) arrays destructivelyRemoveElementFromEndOfArray(array) alters the original array:
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop() 
  array
}
//====================
//17) arrays removeElementFromEndOfArray(array) removes the last element from the array:
/*function removeElementFromEndOfArray(array) {
  return array.pop()
  
}*/

//18) arrays removeElementFromEndOfArray(array) does not alter the original array:
 function removeElementFromEndOfArray(array) {
  return array.slice(-1)
}
