var chocolateBars = ['snickers', "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(y, x){
  chocolateBars = [x, ...y];
  return chocolateBars;
}
function destructivelyAddElementToBeginningOfArray(y,x){
  y.unshift(x);
  return y;
}
function addElementToEndOfArray(y, x){
  y = [...y, x];
  return y;
}
function destructivelyAddElementToEndOfArray(y,x){
  y.push(x);
  return y;
}
function accessElementInArray(x, y){
  return x[y];
}
function removeElementFromBeginningOfArray(y){
  y = y.slice(1);
  return y;
}
function destructivelyRemoveElementFromBeginningOfArray(y){
  y.shift();
  return y;
}
function removeElementFromEndOfArray(y){
  y = y.slice(0, y.length - 1);
  return y;
}
function destructivelyRemoveElementFromEndOfArray(y){
  y.pop();
  return y;
}