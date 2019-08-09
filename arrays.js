//Bootcamp Prep – JavaScript Arrays learn.co
var chocolateBars = ['snikers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, el){
  array.unshift(el);
  return chocolateBars;
}
function addElementToEndOfArray(array, el){
  array.push(el);
  return chocolateBars;
}
function destructivelyAddElementToBeginningOfArray(array, el){
  array[0]=el;
  return chocolateBars;
}
function destructivelyAddElementToEndOfArray(array, el){
  array[array.length-1]=el;
  return chocolateBars;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array, index){
  array.slice(1);
  return chocolateBars;
}
function removeElementFromEndOfArray(array, index){
  array.slice(0, array.length-1);
  return chocolateBars;
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
