var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a,b){
  return [b,...a];
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a,b){
  return [...a,b]; 
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b);
  return a;
}

function accessElementInArray(a,index) {
  return a[index];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1); //returns arr with removed item, but original array stays untouched
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop() //returns removed element
  return a;
}

function removeElementFromEndOfArray(a) {
  return a.slice(0,a.length-1) //returns arr with removed item, but original array stays untouched
}