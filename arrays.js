var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

var x = ["foo"];

const one = [1];
function addElementToBeginningOfArray(x, one){
  return [one, ...x];
}

function destructivelyAddElementToBeginningOfArray(x,one){
   x.unshift(one);
  return x;
}
function addElementToEndOfArray(x,one){
  return [...x,one];
}
function destructivelyAddElementToEndOfArray(x,one){
   x.push("foo");
   return x;
  
}
var n = [1, 2, 3];
function accessElementInArray(n,i){
  return n[2];
}

function destructivelyRemoveElementFromBeginningOfArray(n){
   n.shift();
   return n;
}
function removeElementFromBeginningOfArray(x){
  return x.slice(one);
}
function destructivelyRemoveElementFromEndOfArray(n){
   n.pop();
   return n;
  }
function removeElementFromEndOfArray(n){
  return n.slice(0, n.length -1);
}
