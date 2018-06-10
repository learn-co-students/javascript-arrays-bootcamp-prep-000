<<<<<<< HEAD
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array
var addition
var index
=======
var chocolateBars ["snickers", "hundred grand", "kitkat", "skittles"];
var array
var addition
>>>>>>> 023e14d20aacff96274d03abbba0a5399c175a27
function addElementToBeginningOfArray(array, addition) {
  var temp = [addition,...array]
return temp
}
<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, addition) {
  array.unshift(addition)
  return array
}
function addElementToEndOfArray(array, addition) {
  var temp = [...array, addition]
  return temp
}
function destructivelyAddElementToEndOfArray(array, addition) {
  array.push(addition)
  return array
}
function accessElementInArray(array, index) {
 return array[index]
}