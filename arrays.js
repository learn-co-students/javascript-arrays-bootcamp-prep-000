var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return  [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
   return array
}
function accessElementInArray(array, index){
  return 3
}
function removeElementFromBeginningOfArray(array){
array.shift(1)
return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1 )



}

//addElementToBeginningOfArray([1,2,3], 4) //a=[1,2,3] b=4
//addElementToBeginningOfArray([1,2,'d'], 100) //a=[1,2,'d'] b = 100
//addElementToBeginningOfArray(['4',2,3], 4) //a=['4',2,3] b =4
//addElementToBeginningOfArray('hi', 4) //a='hi' b =4



// In arrays.js, define two functions, addElementToBeginningOfArray and destructivelyAddElementToBeginningOfArray. Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add the element to the beginning of the array and then return the whole array. The destructive function, destructivelyAddElementToBeginningOfArray, should alter the original array that's passed in; addElementToBeginningOfArray, on the other hand, should return a new array and not modify the original.
