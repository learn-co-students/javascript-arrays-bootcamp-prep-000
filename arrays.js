var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(array,value){
  return [...value,...array];
}
function destructivelyAddElementToBegginingOfArray(array,value){
  return array.unshift(value);
}
function addElementToEndOfArray(array,value){
  return [...array,...value];
}
function destructivelyAddElementToEndOfArray(array,value){
  return array.push(value);
}
function accessElementInArray(array,index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}