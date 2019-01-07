var chocolateBars = ["snickers" , "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (chocolateBars,pizza) {
  return [pizza,...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray (chocolateBars,pizza) {
  chocolateBars.unshift (pizza);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, pizza){
  return [...chocolateBars, pizza];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, pizza){
  chocolateBars.push(pizza);
  return chocolateBars;
}
function accessElementInArray (array, index) {
  return array[index]; 
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
 
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}