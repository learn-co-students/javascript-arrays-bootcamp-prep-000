var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

// Grilled Cheese Ingredients
var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
];

// Tomato Sauce Ingredients
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
];

// TODO
// Chocolate Bars!!!
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// Pushing elements onto the end of an array:
var superheroines = ['catwoman', 'she-hulk', 'mystique'];
superheroines.push('wonder woman');

// Unshift elements onto the beginning of an array:
var cities = ["New York", "San Francisco"];
cities.unshift("Philadelphia");

// Cities Spread!
var cities = ["New York", "San Francisco"];
["Philadelphia", ...cities]

cities

// Cats
const cats = ["Milo", "Garfield"]
const moreCats = ["Felix", ...cats]

var myArray = [1, 2, 3]
myArray[5] = 5
myArray

// TODO
// Adding Elements... Sometimes Destructively
function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// TODO
// Similar to Above, but End of Array
function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// TODO
// Accessing an Element
function accessElementInArray(array, index) {
  return array[index];
}

// TODO
// From the Beginning of an Array
// Removing an Element... Destructively
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Slice... Soooo, not destructively :)
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

// From the End of an Array - Destructively
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// From the End of an Array
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}

// From the Middle - Using Slice!
var items = [1, 2, 3, 4, 5];
// remove the 3rd element
// slice from start up to but not including index 2 (third element)
// slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]