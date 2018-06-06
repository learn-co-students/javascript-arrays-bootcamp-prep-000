var ingredient1 = "bread"
var ingrdient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

 function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
 }
 
 function addElementToEndOfArray(array, element){
  var newarray = [...array, element]
   return newarray
 }
 
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
    return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementfromBeginningofArray(array){
  var newarray = array.slice(1)
  return newarray
}

function destructivelyRemoveElementFromBeginningofArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndofArray(array){
  array.pop()
  return array
}

function removeElementFromEndofArray(array){
  return array.slice(0, array.length-1)
}