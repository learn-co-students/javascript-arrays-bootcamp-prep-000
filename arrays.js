var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray ([], element){
   var myArray=[];
   var myNewArray=[element,...myArray,];
   return myNewArray[];
}

function destructivelyAddElementToEndOfArray([], element){
var myArray=[];
myArray.push(element);
return myArray[];
}

function addElementToEndOfArray([], element){
  var myArray=[];
  var myNewArray=[...myArray,element];
  return myNewArray;
}

function destructivelyAddElementTOEndofArray([], element){
  var myArray=[];
  myArray.unshift(element);
  return myArray;
}

function accessElementInArray([],n){
  var myArray=[];
  return myArray[n];
}

function destructivelyRemoveElementFromEndOfArray([]){
  var myArray=[];
  myArray.shift()
  return myArray;
}

function removeElementFromBeginningOfArray([]){
  var myArray=[];
  var myNewArray=myArray.slice(1);
  return myNewArray;
}

function destructivelyRemoveElementFromEndOfArray([]){
  var myArray=[];
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray([]){
  var myArray=[];
  var myNewArray=myArray.slice(0,myArray.length-1);
  retrun myNewArray;
}
S
