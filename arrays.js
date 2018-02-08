var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


//Function parameters: "a = array" "e = element"

function addElementToBeginningOfArray (a,e){
  //DO NOT MODIFY ORIGINAL
  var aNew = [e, ...a];
  
 //return a NEW array
  return aNew;
}

function destructivelyAddElementToBeginningOfArray (a,e) {
  a.unshift(e);
  return a;
}

function addElementToEndOfArray (a,e){

  aNew = [...a, e];
  return aNew;
}

function destructivelyAddElementToEndOfArray (a,e) {
  a.push(e);
  return a;
}

function accessElementInArray (a,i) {
  var e = a[i];
  return e;
}

function destructivelyRemoveElementFromBeginningOfArray (a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray (a) {
  var aNew = a.slice(1);
  return aNew;
}

function destructivelyRemoveElementFromEndOfArray (a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray (a) {
  var aNew = a.slice(0, a.length -1);
  return aNew;
}







