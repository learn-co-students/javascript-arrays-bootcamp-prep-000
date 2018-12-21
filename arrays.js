var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var superheroines = ["catwoman", "she-hulk","mystique"];

superheroines.push("wonder woman");

var newArray = ["foo"];
var newElem = [1]

function addElementToBeginningOfArray(newArray, newElem) {
  return [newElem, ...newArray];
}

function destructivelyAddElementToBeginningOfArray(newArray, newElem) {
  newArray.unshift(newElem);
  return newArray;
} 


function addElementToEndOfArray(newArray, newElem) {
  return [...newArray, newElem];
}

function destructivelyAddElementToEndOfArray(newArray, newElem){
  newArray.push(newElem);
  return newArray;
}

var secArray = [1 , 2, 3, 2];

function accessElementInArray(secArray) {
  return secArray[2]; 
}

var superArray = [1, 2, 3];

function destructivelyRemoveElementFromBeginningOfArray(superArray) {
  superArray.shift();
  return superArray;
} 

function removeElementFromBeginningOfArray(superArray) {
  return superArray.slice(1);
}

var superDuperArray = [1,2,3]

function destructivelyRemoveElementFromBeginningOfArray(superDuperArray) {
  superDuperArray.shift();
  return superDuperArray;
}

function destructivelyRemoveElementFromEndOfArray (superDuperArray) {
  superDuperArray.pop();
  return superDuperArray;
}

var boomArray = [1, 2, 3];

function removeElementFromEndOfArray (boomArray) {
  return boomArray.slice(0, boomArray.length - 1);
}
