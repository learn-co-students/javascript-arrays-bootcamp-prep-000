var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var grilledCheeseIngredients = ["bread","mild cheese", "sharp cheese", "butter", "tomato", "garlic"];

var tomatoSauceIngredients = ["tomato", "garlic", "olive oil", "basil", "oregano"];

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ["game of thrones", "true detective", "mr robot", "castlevania", "altered carbon"];

var weirdGreeting = ["he", 110, "w", 0, "r", 1, "d"];

var empty = [];

var evenNumbers = new Array ([2, 4, 6, 8, 10]);

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var superheroines = ["catwoman", "she-hulk", "mystique"];
superheroines.push("wonder woman");

var cities = ["New York", "San Francisco"];
cities.unshift("Philadelphia");
cities = ["Philadelphia", ...cities]; 
const cats = ["Milo", "Garfield"];
const moreCats = ["Felix", ...cats];
/*
var myArray = [2, 4, 6];
myArray[3];
console.log(myArray[3]);
*/

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  // console.log(array.unshift(element));
  array.unshift(element);
  //console.log("unSHIFT", array)
  return array;
}

destructivelyAddElementToBeginningOfArray([1], "foo");

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  array.shift(element);
  return array; 
}

function removeElementFromBeginningOfArray (array) {
   return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(array);
  return array; 
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1);
}

