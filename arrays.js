
//var grilledCheeseIngredients = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'];
//var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano'];

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var myArray = [1,2,3];


function addElementToBeginningOfArray(myArray,x){
   var myNewArray = [x,...myArray];
  return myNewArray;
}


function destructivelyAddElementToBeginningOfArray(myArray,y){
  myArray.unshift(y);
  return myArray;
}

function addElementToEndOfArray(myArray, z){
  var myNewEndArray= [...myArray, z];
  return myNewEndArray;
}

function destructivelyAddElementToEndOfArray(myArray, i){
  myArray.push(i);
  return myArray;
}

function accessElementInArray(myArray, i){
  return myArray[i];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(myArray){
  var mySlicedArray = myArray.slice(1);
  return mySlicedArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray){
  mySlicedLengthArray = myArray.slice(0, myArray.length -1);
  return mySlicedLengthArray;
}