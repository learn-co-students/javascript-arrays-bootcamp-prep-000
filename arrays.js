
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//Below it will add an element to the beginning and make a new array called newArray
function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array];
  return newArray
}
//Below it will add an element to the beginning and mutate the original array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
//Below it will add an element to the end and make a new array called newArray
function addElementToEndOfArray(array, element){
  newArray = [...array, element];
  return newArray
}
//Below it will add and element to the array to the end and mutate the original array
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
//Not sure about first number (1) but second number (2) will show the third element in that array
function accessElementInArray(array, index){
  return array[1,2]
}
//.shift will remove the first element and mutate the array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array)
  return array
}
//.slice will remove the element you select given by () and then create a new array. Make sure to have newArray = array.slice(x)
function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return newArray
}
//.pop Removes the last element in the array
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(array)
  return array
}
//Tells the slice to start at location (0) and remove -1 which is the last element. Suppose you could do -2 and it would remove the last two elements
function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length - 1)
  return newArray
}
