var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  return [element,...array] // adds element in begin of array
} 

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element) // removes first element in array
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]; // adds element to end of array
}


function accessElementInArray (array, index){
  return (array[index]) // identify element at x index
}

function removeElementFromBeginningOfArray (array) {
 return array.slice(1); // removes [0] / first element in array
}

function removeElementFromEndOfArray (array) {
 return array.slice(0, array.length - 1); // removes last element at end of array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop() // removes last/most recent added element in array
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift() // removes first element in array
  return array

}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element) // adds element at end of array
  return array
}