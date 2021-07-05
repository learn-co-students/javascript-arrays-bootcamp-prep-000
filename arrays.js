
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var candyString = "foo"
 
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
   chocolateBars.unshift(candyString);
  return chocolateBars;
}
 
 function addElementToEndOfArray(chocolateBars, candyString) {
   return [...chocolateBars, candyString];
 }

 function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
    chocolateBars.push(candyString);
   return chocolateBars
  
 }
 
 
 function accessElementInArray (array, index) {
   return (array[index]);
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){ 
   array.shift();
   return array;
 }
 
 
 function removeElementFromBeginningOfArray(array,index){
   return array.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
 }
 
 function removeElementFromEndOfArray(array){
 return array.slice(0, array.length-1);  
 }
 