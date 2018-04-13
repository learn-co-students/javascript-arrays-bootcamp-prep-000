//#1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//#2
//const array = [1]

function addElementToBeginningOfArray (array,element) {
  return [element, ...array]
}
addElementToBeginningOfArray ([1], 'foo');

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray ([1],'foo');

//#3
function addElementToEndOfArray(array,element){
  return [...array,element];
}
addElementToEndOfArray([1],'foo')

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
  destructivelyAddElementToEndOfArray([1],'foo')
  
//#4
function accessElementInArray(array,index){
  return (array[index])
}
accessElementInArray(([1, 2, 3], 2))
  
//#5
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
removeElementFromBeginningOfArray([1, 2, 3])
  
//#6
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
removeElementFromBeginningOfArray([1,2,3])

//#7
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
destructivelyRemoveElementFromEndOfArray([1,2,3])

//#8
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
  //return array
}
removeElementFromEndOfArray([1,2,3])


  