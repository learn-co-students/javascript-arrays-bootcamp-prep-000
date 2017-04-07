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

var array = [];
function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element) {
    return array = [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(array, index) {
  array = [1,2,3];
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
    array = array.slice(1);
    return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
      array.pop();
      return array;
}

function removeElementFromEndOfArray(array) {
    array = array.slice(0, array.length - 1);
    return array;
}
