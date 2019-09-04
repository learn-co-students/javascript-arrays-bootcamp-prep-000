var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
];
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
];

var chocolateBars = [
'snickers', 
'hundred grand', 
'kit kat', 
'skittles'];

// var newArray = [];
// var newArray1 = [];
// var newArray2 = [];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

// function destructivelyAddElementToBeginningOfArray(array, element){
//   newArray1.unshift('foo');
//   return newArray1;
// }


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo');
  return array;
  
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
  
}
function accessElementInArray(array, index){
  
    return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
  
}
function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1);
  
}
