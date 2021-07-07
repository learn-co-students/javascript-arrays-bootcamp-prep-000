var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = 
  [
  'bread',
  'mild cheese',
  'butter',
  'tomato',
  'garlic'
  ]
  
var tomatoSauceIngredients = 
  [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
  ]
  
var primeNumbers = [2, 3, 5, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ['game of thrones', 'true detective', 'the good wife', 'empire']

var weirdGreeting = ['he', 110, 'w', 0, 'r', 1, 'd'];

var chocolateBars = ['snickers', 'hundrer grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, elem){
  var newArray = [elem, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array.unshift(elem);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, i){
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array[0]);
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
 return array.slice(0, array.length - 1)
}

