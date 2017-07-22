var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6
]

var tomatoSauceIngredients = [
  ingredient5,
  ingredient6,
  'olive oil',
  'basil',
  'oregano'
]

var oddNumbers = [];
var evenNumbers = new Array();

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var superheroines = ['catwoman', 'she-hulk', 'mystique'];
superheroines.push('wonder woman');

var cities = ['New York', 'San Francisco']
cities.unshift('Philadelphia')

moreCities = ['Philadelphia', ...cities, 'Fernando']

function addElementToBeginningOfArray(arr, el) {
  var newArr = [el, ...arr];
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}
function addElementToEndOfArray(arr, el) {
  newArr = [...arr, el];
  return newArr;
}
function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}
function accessElementInArray(arr, indx) {
  return arr[indx];
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr) {
  var arrWithoutFirst = arr.slice(1);
  return arrWithoutFirst;
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr) {
  var arrWithoutLast = arr.slice(0, arr.length-1);
  return arrWithoutLast;
}
