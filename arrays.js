var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(arrayName,elementName) {
var newArray = [elementName, ...arrayName];
return newArray
}
function destructivelyAddElementToBeginningOfArray(arrayName,elementName){
  arrayName.unshift(elementName);
  return arrayName
}
function addElementToEndOfArray(arrayName,elementName) {
var newArray = [...arrayName, elementName] ;
return newArray
}
function destructivelyAddElementToEndOfArray(arrayName,elementName){
  arrayName.push(elementName);
  return arrayName
}
function accessElementInArray(arrayName,indexNum){
  return arrayName[indexNum];
}
function removeElementFromBeginningOfArray(arrayName){
  var newArray = arrayName.slice(1);
  return newArray
}
function destructivelyRemoveElementFromBeginningOfArray(arrayName){
  arrayName.shift();
  return arrayName
}
function removeElementFromEndOfArray(arrayName) {
var newArray = arrayName.slice(0, arrayName.length - 1) ;
return newArray
}
function destructivelyRemoveElementFromEndOfArray(arrayName){
  arrayName.pop();
  return arrayName
}
var addElemBeginArray = addElementToBeginningOfArray(chocolateBars, "Mounds");
var desAddElemBeginArray = destructivelyAddElementToBeginningOfArray(chocolateBars, "Mounds");
var addElemEndArray = addElementToEndOfArray(chocolateBars, "Mounds");
var desAddElemEndArray = destructivelyAddElementToEndOfArray(chocolateBars, "Mounds");
var accElemArray = accessElementInArray(chocolateBars, 0);
var remElemBeginArray = removeElementFromBeginningOfArray(chocolateBars);
var desRemElemBeginArray = destructivelyRemoveElementFromBeginningOfArray(chocolateBars);
var remElemEndArray = removeElementFromEndOfArray(chocolateBars);
var desRemElemBeginArray = destructivelyRemoveElementFromEndOfArray(chocolateBars)
