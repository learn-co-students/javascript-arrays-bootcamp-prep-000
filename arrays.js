//list a bunch of variables
var ingredient1 = 'bread'
var ingredient2 = 'mild cheese'
var ingredient3 = 'sharp cheese'
var ingredient4 = 'butter'
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

//now let's group a list of items into a single variable
//array literals list values within square brackets
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

//you can also use the array constructor - note the use of 'new' in the constructor
var evenNumbers = new Array()

//there are destructive methods for mutating arrays
//push() adds item to end of array
//pop() removes item from end of array
//unshift() adds item to start of array
//shift() removes item from start of array

//there are also non-destructive methods for generating new arrays from existing arrays
//slice(n) removes n items from the start of an existing array and a negative int argument removes n items from the end
//slice(n, i) removes everything n items from the start of an argument and everything i items after n

//the spread operator '...array' allows for the user to specify which items to add and whether to add them to the start or the end
var numbers = [1, 2, 3]
//[0, ...numbers]
//[...numbers, 4]

//you can also destructively mutate the original array if it's a variable
numbers = [0, ...numbers]
numbers = [...numbers, 4]
//you can also add elements at a specific array index - any undefined items will be left as such - this can lead to unexpected behavior
numbers[10] = 10

//operating within the middle of the array is trickier - you can do this with the splice() method
//all splice() arguments are optional
//splice(index, #elemToAdd, #elemToRemove...)
//let items = [1, 2, 3, 4]
//items.splice() returns []
//items.splice(1) removes everything after index 1 and returns [1]
//items.splice(1, 1) removes one item after index 1 and returns [1, 3, 4]
//items.splice(1, 1, 6, 7) removes one item after index 1 and adds items 6 and 7 thereafter, returning [1, 6, 7, 3, 4]

//combine splice() with the spread operator '...array' for more complex operations
//var items = [1, 2, 3, 4, 5]
//let's remove the third item
//var newItems = [...items.slice(0, 2), ...items.slice(3)] gives [1, 2] & [4, 5] combined to give [1, 2, 4, 5] 

//array indices are actually strings
//the .keys property will return array indices as strings
//you can access array items at an index with either numbers or strings
//array[2]
//array[02]
//array['2']
//array['02'] <--- this won't work, string '02' cannot be coerced into number 2

//now for the cool shyt
//you can assign properties to arrays
//var array = [1,2]
//array.length = 1
//array now returns [1]
//properties don't have to mutate the array
//array.myProperty = 'I'm a property'
//this string doesn't exist as an item in the array, but can be called as array.myProperty to return the string 'I'm a property'

//todo
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
