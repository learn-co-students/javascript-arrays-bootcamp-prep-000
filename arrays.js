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
  
function addElementToBeginningOfArray (chocolateBars, lemon) {
  return [lemon, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, lemon) {
  chocolateBars.unshift('foo')
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, lemon) {
  return [...chocolateBars, lemon]
}
function destructivelyAddElementToEndOfArray(chocolateBars, lemon) {
    chocolateBars.push('foo')
  return chocolateBars
}

function accessElementInArray(chocolateBars){
 return  chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
  
}







