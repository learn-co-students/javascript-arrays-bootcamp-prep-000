var ingredient1 = "bread"
var ingredient2 = "mild chees"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var griledCheeseIngredients = [
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
{
var chocolateBars = [
  'snicker', 'hundred grand', 'kitkat', 'skittles'
]
}

function addElementToBeginningOfArray(array, foo){
  var array = [foo, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, foo){
  [array.unshift(foo)]
  return array
  //console.log(array)
}

function addElementToEndOfArray(array, foo) {
  var array = [...array, foo]
  return array
}

function destructivelyAddElementToEndOfArray(array, foo) {
  [array.push(foo)]
  return array
}

function accessElementInArray(array, index){
return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(1)
  return array
}

function removeElementFromEndOfArray(array){
 return array.slice(0, array.length -1)
}
