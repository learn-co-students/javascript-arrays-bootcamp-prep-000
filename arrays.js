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
]
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
var chocolateBars = new Array('snickers','hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array,element) {
    var newArray =  [element,...array]
    return newArray
  
}
function destructivelyAddElementToBeginningOfArray(array,element){
   var array = [element,array]
   return array
 
}
function addElementToEndOfArray(array,element){
  const  newArray = [...array,element]
  return newArray
}
function destructiveAddElementToEndOfArray(array,element){
  var changedArray = [array.unshift(element)]
  return changedArray
}
function accessElementsInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  var slicedArray = array.slice(1)
  return slicedArray
}
function destructivelyRemoveElementFromEndofArray(array){
  return array.pop()
}
function removeElementFromEndOfArray(array){
  return (array.slice(0,array.length - 1))
}