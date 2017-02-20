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

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

var superheroines = [
  'catwoman',
  'she-hulk',
  'mystique'
];
superheroines.push('wonder woman');

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  var superheroines = [
    'catwoman',
    'she-hulk',
    'mystique'];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift (element)

  return array

  var superheroines = [
    'catwoman',
    'she-hulk',
    'mystique'];

    superheroines.unshift('wonder woman')
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push (element);

  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift (element);
  return array
}

function removeElementFromBeginningOfArray(array, index) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
array.pop (element);

return array
}

function removeElementFromEndOfArray(array, index) {
return array.slice(0,length - 1)
}
