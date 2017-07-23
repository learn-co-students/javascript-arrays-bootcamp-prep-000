var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  var newarr = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element){
  var newarr = [...array,element]
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length-1)
  return array
}

/*var grilledCheeseIngredients = [
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
]*/

/*
var cities = ["New York", "San Francisco"]
 //spread operator adds but doesn't modify the array
[...cities, "Philadelphia"] // ["New York", "San Francisco", "Philadelphia"]*/
