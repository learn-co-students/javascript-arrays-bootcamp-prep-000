var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese'
  'sharp cheese'
  'butter'
  'tomato'
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato'
  'garlic'
  'olive oil'
  'basil'
  'oregano'
]

var chocolateBars = [
  'snickers'
  'hundred grand'
  'kitkat'
  'skittles'
]

addElementToBeginningOfArray(array, element){
  newArray = [element,...array]
  return newArray
}

destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element)
  return array
}

addElementToEndOfArray(array,element) {
  newArray = [array,...element]
  return newArray
}
destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return array
}

accessElementInArray(array, index){
  return array[index]
}

destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return newArray
}

destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length - 1)
  return newArray
}
