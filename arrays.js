/*
let grilledCheeseIngredients  = [
  'bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'
];
let tomatoSauceIngredients = [
  'tomato', 'garlic', 'olive oil', 'basil', 'oregano'
];
*/
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(arrayName, elementToAdd){
  let newArray1 = [elementToAdd, ... arrayName];
  return newArray1;
}
function destructivelyAddElementToBeginningOfArray(arrayName, elementToAdd){
    arrayName.unshift(elementToAdd);
    return arrayName;
}

function addElementToEndOfArray(arrayName, elementToAdd){
  let newArray2 = [... arrayName, elementToAdd];
  return newArray2;
}
function destructivelyAddElementToEndOfArray(arrayName, elementToAdd){
   arrayName.push(elementToAdd);
   return arrayName;
}

function accessElementInArray(arrayName, index){
  return arrayName[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName){
   arrayName.shift();
   return arrayName;
}

function removeElementFromBeginningOfArray(arrayName){
  let newArray3 = arrayName.slice(1);
  return newArray3;
}

function destructivelyRemoveElementFromEndOfArray(arrayName){
  arrayName.pop();
  return arrayName;
}

function removeElementFromEndOfArray(arrayName){
  let newArray4 = arrayName.slice(0, (arrayName.length -1));
  return newArray4;
}
