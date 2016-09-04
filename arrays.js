var ingredient1 = 'bread'
var ingredient2 = 'mild cheese'
var ingredient3 = 'sharp cheese'
var ingredient4 = 'butter'
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

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
  'snickers', 'hundred grand', 'kitkat', 'skittles']
console.log(chocolateBars);

var addElementToBeginningOfArray = (array) => {
  // var array = [1];
  array = ['foo', ...array];
  return array;
}

var destructivelyAddElementToBeginningOfArray = (array) => {
  // var array = [1]; why do i not need to define this?
  array.unshift('foo');
  return array;
}

var addElementToEndOfArray = (array) => {
  // var array = [1];
  array = [...array, 'foo'];
  return array;
}

var destructivelyAddElementToEndOfArray = (array) => {
  // array = [1] why do i not need to define this?
  array.push('foo')
  return array;
}

var accessElementInArray = (index) => {
  var array = [1, 2, 3];
  return array[2];
}

var removeElementFromBeginningOfArray = (index) => {
  var array = [1, 2, 3];
  array.shift(0);
  return array;
}

var removeElementFromEndOfArray = (index) => {
  var array = [1, 2, 3];
  array.pop(2);
  return array;
}
