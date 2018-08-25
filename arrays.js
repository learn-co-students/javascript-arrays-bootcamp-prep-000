var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

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
  "vasil",
  "oregano"
]

console.log(tomatoSauceIngredients)

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  arrayNew = [element, ...array]
  return arrayNew
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  arrayNew = [...array, element]
  return arrayNew
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
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
  var arrayNew = array.slice(1)
  return arrayNew
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var arrayNew = array.slice(0, array.length - 1)
  return arrayNew
}


