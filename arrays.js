var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];
var number = [1,2,3]
function addElementToBeginningOfArray(chocolateBars, foo){
  chocolateBars = ["foo", ...chocolateBars]
    return chocolateBars;
}
function addElementToEndOfArray (chocolateBars, foo){
  chocolateBars = [...chocolateBars, "foo"]
  return chocolateBars;
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift ("foo")
  return chocolateBars;
}
function destructivelyAddElementToEndOfArray (chocolateBars, foo){
  chocolateBars.push ("foo")
  return chocolateBars;
}
function accessElementInArray(number, index) {
  return (number [index]);
}
/*
function destructivelyRemoveElementFromBeginningOfArray(number, 1) {
  number.shift(1)
  return number;
}
function destructivelyRemoveElementFromEndOfArray(number, 2){
  number.pop(2)
  return number;
}
*/
function removeElementFromBeginningOfArray(number) {
  var newNumber = number.slice(1)
  return newNumber;
}
function removeElementFromEndOfArray(number) {
  var newNumber = number.slice(0, number.length - 1)
  return newNumber;
}
