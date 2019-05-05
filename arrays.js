var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic']

var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano']

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = ["he", 110, "w", 0, "r", 1, "d"];

var empty = [];

var evenNumbers = new Array();

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var moreChocolate = "hershey";

var superheroines = ["catwoman", "she-hulk", "mystique"];
superheroines.push("wonder woman");

var cities = ["New York", "San Fransisco"];
cities.unshift("Philadelphia");

var cities = ["New York", "San Fransisco"];
cities = ["Philadelphia", ...cities];

const cats = ["Milo", "Garfield"];

const moreCats = ["Felix", ...cats];

var myArray = [1, 2, 3];
myArray[5] = 5;
myArray;

function addElementToBeginningOfArray(chocolateBars, moreChocolate){
  return[moreChocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreChocolate){
  chocolateBars.unshift(moreChocolate);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, moreChocolate){
  return [...chocolateBars, moreChocolate];
}

function destructivelyAddElementToEndOfArray(chocolateBars, moreChocolate){
  chocolateBars.push(moreChocolate);
  return chocolateBars;
}

var entreprenuers = ["Opra Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
console.log(entrepreneurs[0]);

var bio = " is the co-founde and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);
entrepreneurs[9];

function accessElementInArray(chocolateBars, index){
  return chocolateBars[2];
}

const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();
days;

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars;
}

var iceCreams = ["chocolate", "vanilla", "raspberry"];
// iceCreams.pop();
// iceCreams;
iceCreams.slice(0, iceCreams.length-1);
iceCreams;


function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length-1);
}
