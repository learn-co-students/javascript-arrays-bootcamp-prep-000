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

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = ["he", 110, "w", 0, "r", 1, "d"];

var empty = [ ];

var evenNumbers = new Array();

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");

var cities = ["New York", "San Francisco"]

cities = ["Philadelphia", ...cities]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  shorterArray = array.slice(1)
  return shorterArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  anotherArray = array.slice(0, array.length - 1)
  return anotherArray
}