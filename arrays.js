var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element){
  	return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var a = array
  a.unshift(element)
  return a
}
function accessElementInArray(array, element){
  return array[element]
}
function addElementToEndOfArray(array, element){
  return [...array, element] // add element to end of array
}
function destructivelyAddElementToEndOfArray(array, element){
  var end = array  // making the array equal a variable
  end.push(element) // adding element to the end of the array
  return end // return the array
}
function destructivelyRemoveElementFromBeginningOfArray(array){ // defines the function
  array.shift() // removes the first element of the array
  return array // returns the mutated array
}
function removeElementFromBeginningOfArray(array){ // create function for array
  var beginning = array // create variable for array so I don't mutate the original array
  beginning = beginning.slice(1) // remove first element of the array
  return beginning // return mutated array without affecting the original array
}
function destructivelyRemoveElementFromEndOfArray(array){ // define function to remove element from the end of an array
  array.pop() // removes the last element of the array and mutates the array
  return array // returns mutated array
}
function removeElementFromEndOfArray(array){ // function removes last element from the array without mutating the array
  return array.slice(0, array.length -1)  // we remove the last element of the array without altering it
}
