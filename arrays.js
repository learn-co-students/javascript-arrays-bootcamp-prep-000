var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var arr = array , element
  return [element , ...arr]
};
function destructivelyAddElementToBeginningOfArray(array, element){
  var arr = array , element
  arr.unshift(element);
  return arr
};
function addElementToEndOfArray(array, element){
  var arr = array, element
  return [...arr , element]
};
function destructivelyAddElementToEndOfArray(array, element){
  var arr = array , element
  arr.push(element)
  return arr
};
function accessElementInArray(array, index){
   var arr = array , index
  return arr[2];
};
function destructivelyRemoveElementFromBeginningOfArray(array){
   var arr = array
   arr.shift();
  return arr
};
function removeElementFromBeginningOfArray(array){

  return array.slice(1);
};
function destructivelyRemoveElementFromEndOfArray(array){
  var arr = array
  arr.pop()
  return arr
};
function removeElementFromEndOfArray(array){
    var arr = array
  return arr.slice(0, array.length - 1)
};
