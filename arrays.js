var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToBeginningOfArray(a,b) {
  return a = [b,...a]
}
function destructivelyAddElementToBeginningOfArray(a,b) {
a.unshift(b);
return a;
}
function addElementToEndOfArray(x,y) {
  return x = [...x,y];
}
function destructivelyAddElementToEndOfArray(a,b){
  a.push(b);
  return a;
}
function accessElementInArray(a,b){
  return (a[b]);
}
function destructivelyRemoveElementFromBeginningOfArray(a,b) {
  return a.push(b);
}
function removeElementFromBeginningOfArray(a,b) {
  return a.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(a,b) {
  return a.pop();
}
function removeElementFromEndOfArray(a,b) {
  return a.slice(0,a.length - 1);
}
