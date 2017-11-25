var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(a, b) {
  var chocolateBars = [b, ...a];
  console.log(chocolateBars);
  return chocolateBars;
}
addElementToBeginningOfArray(chocolateBars, 'foo');



function destructivelyAddElementToBeginningOfArray(a, b) {
  var chocolateBars = a.unshift(b);
  console.log(chocolateBars);
  return a;
}
destructivelyAddElementToBeginningOfArray(chocolateBars, "foo");



function addElementToEndOfArray(a, b) {
  //var chocolateBars = a.push(b);
  var chocolateBars = [...a, b];
  //console.log(chocolateBars);
  return chocolateBars;
}
addElementToEndOfArray(chocolateBars, 'foo');


function destructivelyAddElementToEndOfArray(a, b) {
  var chocolateBars = a.push(b);
  console.log(chocolateBars);
  return a;
}
destructivelyAddElementToEndOfArray(chocolateBars, "foo");



function destructivelyRemoveElementFromBeginningOfArray(a) {
  const chocolateBars = a.shift();
  console.log(chocolateBars);
  return a;
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBars);


function accessElementInArray(a, i) {
  var chocolateBar = a[i];
  return chocolateBar;
}
accessElementInArray(chocolateBars, 0);


function removeElementFromBeginningOfArray(a) {
  var chocolateBars = a.slice(1);
  console.log(chocolateBars);
  return chocolateBars;
}
removeElementFromBeginningOfArray(chocolateBars);



function destructivelyRemoveElementFromEndOfArray(a){
  var chocolateBars = a.pop();
  console.log(chocolateBars);
  return a;
}
destructivelyRemoveElementFromEndOfArray(chocolateBars);


function removeElementFromEndOfArray(a){
  var chocolateBars = a.slice(0, -1 );
  console.log(chocolateBars);
  return chocolateBars;
}
removeElementFromEndOfArray(chocolateBars);
