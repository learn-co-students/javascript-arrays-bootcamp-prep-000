var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var newEl = "foo"
 
function addElementToBeginningOfArray(chocolateBars, newEl){
  return [newEl, ...chocolateBars];
}
 
function destructivelyAddElementToBeginningOfArray(chocolateBars, newEl){
  chocolateBars.unshift(newEl);
  return chocolateBars;
}
 
function addElementToEndOfArray(chocolateBars, newEl){
  return [...chocolateBars, newEl];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, newEl){
  chocolateBars.push(newEl);
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