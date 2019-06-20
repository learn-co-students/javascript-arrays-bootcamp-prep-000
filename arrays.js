var snickers = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(snickers, hundredGrand){
  return [hundredGrand, ...snickers];
}
 
function destructivelyAddElementToBeginningOfArray(snickers, hundredGrand){
  snickers.unshift(hundredGrand);
  return snickers;
}
 
function addElementToEndOfArray(snickers, hundredGrand){
  return [...snickers, hundredGrand];
}
 
function destructivelyAddElementToEndOfArray(snickers, hundredGrand){
  snickers.push(hundredGrand);
  return snickers;
}
 
function accessElementInArray(array, index){
  return array[index];
}
 
function destructivelyRemoveElementFromBeginningOfArray(snickers){
  snickers.shift();
  return snickers;
}
 
function removeElementFromBeginningOfArray(snickers){
  return snickers.slice(1);
}
 
function destructivelyRemoveElementFromEndOfArray(snickers){
  snickers.pop();
  return snickers;
}
 
function removeElementFromEndOfArray(snickers){
  return snickers.slice(0, snickers.length - 1);
}