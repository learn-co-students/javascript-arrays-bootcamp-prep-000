var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

/*const array = [1]
const element = 'foo'

function addElementToBeginningOfArray(array, element) {
  array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray() {
  var array = [1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  array = array.slice(0, array.length - 1)
  return array
}
*/
//maybe just write it out plainly? i think i made it too complicated.

 function addElementToBeginningOfArray(array, element){
   array = [element, ...array]
   return array;
 }
 function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
 }
 function addElementToEndOfArray(array, element){
   array = [...array, element]
   return array;
 }
 function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array;
 }
 function accessElementInArray(array, index){
   return array[index];
 }
 function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift()
    return array
 }
 function removeElementFromBeginningOfArray(array){
   return array.slice(1)
 }
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
 }
 function removeElementFromEndOfArray(array){
   return array.slice(0, array.length -1)
 }
