var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
function destructiveltAddElementToBeginningOfArray(chocolateBars, candyString){
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString){
  return[... chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
return ChocolateBars;
}
function accessElementinArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chcolateBars){
  chocolateBars.shift();
  return chocolateBars;
}