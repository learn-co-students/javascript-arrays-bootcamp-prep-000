
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
    
var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(element, array) {
   return [array, ...element]
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array 
}
function addElementToEndOfArray(element, array) {
  return [...element, array]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}