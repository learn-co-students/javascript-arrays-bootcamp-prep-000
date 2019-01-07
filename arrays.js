var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(Array,element) {
  var newarray = [element, ...Array];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(Array,element) {
  Array.unshift(element);
  return Array
}

function addElementToEndOfArray(Array,element) {
 var newarray = [...Array,element];
  return newarray
}

function destructivelyAddElementToEndOfArray(Array,element) {
  Array.push(element);
  return Array
}

function accessElementInArray(array,index) {
  console.log(array[index]);
  return array[index]
}


function destructivelyRemoveElementFromBeginningOfArray(Array){
  Array.shift();
  return Array
}

function removeElementFromBeginningOfArray (Array){
  var newarray = Array.slice(1);
  return newarray
}

function destructivelyRemoveElementFromEndOfArray(Array){
 Array.pop();
 return Array
}

function removeElementFromEndOfArray(Array){
var newarray = Array.slice(0,Array.length-1);
return newarray;
}