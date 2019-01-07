var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var ferrero = "foo"
 
function addElementToBeginningOfArray(chocolateBars, ferrerog){
  return [ferrero, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, ferrero){
  chocolateBars.unshift(ferrero);
  return chocolateBars;
}
 
function addElementToEndOfArray(chocolateBars, ferrero){
  return [...chocolateBars, ferrero];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, ferrero){
  chocolateBars.push(ferrero);
  return chocolateBars;
}
 
function accessElementInArray(array, index){
  return array[index];
}
 
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
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