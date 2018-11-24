var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
 
var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];
 
var weirdGreeting = [ "he", 110, "w", 0, "r", 1, "d" ];
 
var empty = [];

var evenNumbers = new Array();

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
  ]
  
function addElementToBeginningOfArray (array,element) {
var newArray = [element,...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array,element) {
array.unshift(element)
return array
}

function addElementToEndOfArray (array,element) {
var newArray = [...array,element]
  return newArray
}

function destructivelyAddElementToEndOfArray (array,element) {
array.push(element)
return array
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var smallerArray = array.slice(1)
  return smallerArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var smallArray = array.slice(0, array.length - 1)
  return smallArray
}