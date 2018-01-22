var grilledCheeseIngredients = [
  "bread",
  "mild cheese",
  "sharp cheese",
  "butter",
  "tomato",
  "garlic"
]

var tomatoSauceIngredients = [
  "tomato",
  "garlic",
  "olive oil",
  "basil",
  "oregano"
]

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
}