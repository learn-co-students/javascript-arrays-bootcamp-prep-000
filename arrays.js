var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];
function addElementToBeginningOfArray(anArray,anElement) {
  anArray = [anElement, ...anArray];
  return anArray;
}
addElementToBeginningOfArray(chocolateBars,'reeses');

function destructivelyAddElementToBeginningOfArray(anArray,anElement) {
  anArray.unshift(anElement);
  return anArray;
}
destructivelyAddElementToBeginningOfArray(chocolateBars,'reeses');

function addElementToEndOfArray(anArray,anElement) {
  anArray = [...anArray, anElement];
  return anArray;
}
addElementToEndOfArray(chocolateBars,'reeses');


function destructivelyAddElementToEndOfArray(anArray,anElement) {
  anArray.push(anElement);
  return anArray;
}
destructivelyAddElementToEndOfArray(chocolateBars,'reeses');

function accessElementInArray(anArray,i){
  return anArray[i];
}
accessElementInArray(chocolateBars,1);

function destructivelyRemoveElementFromBeginningOfArray(anArray) {
  anArray.shift();
  return anArray;
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(anArray) {
  anArray = anArray.slice(1);
  return anArray;
}
removeElementFromBeginningOfArray(chocolateBars);


function destructivelyRemoveElementFromEndOfArray(anArray) {
  anArray.pop();
  return anArray;
}
destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(anArray) {
  anArray = anArray.slice(0, anArray.length - 1);
  return anArray;
}
removeElementFromEndOfArray(chocolateBars);
