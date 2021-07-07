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
];
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
];
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'
  ];
function addElementToBeginningOfArray(array, n) {
  var newArray = [n, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, n){
  array.unshift(n)
  return array
}
function addElementToEndOfArray(array, element) {
 return [...array, element] 
}
function destructivelyAddElementToEndOfArray(array, n) {
  array.push(n)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) { array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
