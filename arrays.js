var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
];
function addElementToBeginningOfArray(chocolateBars,foo){
  return ["foo", ...chocolateBars];
}
function destructivelyAddElementToEndOfArray(chocolateBars,foo){
  chocolateBars.push(foo);
  return chocolateBars
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
function destructivelyAddElementToBeginningOfArray (chocolateBars,foo){
  chocolateBars.unshift(foo);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars,foo){
  return [...chocolateBars, foo];
}
function accessElementInArray(array,index){
  return array[index]
}
function removeElementFromBeginningOfArray(chocolateBars){
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
  return chocolateBars.slice(0, chocolateBars.length -1);
}
