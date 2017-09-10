var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (fromArray, newElement){
  return [newElement,...fromArray]
}
function addElementToEndOfArray(fromArray, newElement){
  return [fromArray,...newElement]
}
functiom destructivelyAddElementToEndOfArray(fromArray, newElement){
   return fromArray.push(newElement)
}
functionn destructivelyAddElementToBeginningOfArray(fromArray, newElement){
  return fromArray.unshift(newElement)
}
function destructivelyRemoveElementFromEndOfArray(fromArray){
return fromArray.properties;
}
function destructivelyRemoveElementFromBeginningOfArray(fromArray){
  return fromArray.shift;
}
function removeElementFromEndOfArray(fromArray){
  var NewCat = slice(fromArray,-1);
  return NewCat;
}
function removeElementFromBeginningOfArray(fromArray){
  var NewCat = slice(fromArray,1);
  return NewCat;
}
function accessElementInArray(fromArray, indexID) {
  return fromArray(indexID);
}
