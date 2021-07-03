var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var newArray = [];
var oldArray = [];
var myArray = [];
var mySecondArray = [];
var arrayName = [];

function addElementToBeginningOfArray(newArray, element) {
 var newArray2 = [element, ...newArray];
 return newArray2
}


function destructivelyAddElementToBeginningOfArray(oldArray, element1){
oldArray = oldArray.unshift(element1);
return oldArray
  
}

function addElementToEndOfArray(myArray, newElement){
  var myArray2 = [newElement, ...myArray];
  return myArray2
}

function destructivelyAddElementToEndOfArray(mySecondArray, SecondElement){
  mySecondArray = mySecondArray.push(SecondElement);
  return mySecondArray
}

function accessElementInArray(arrayName, position){
  return arrayName[position];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName){
 return  arrayName.shift()
}
function removeElementFromBeginningOfArray(arrayName,position){
  arrayName = arrayName.slice(position)
  return arrayName
  
}
function removeElementFromEndofArray(arrayName){
  arrayName.slice(0,arrayName.length-1)
}
