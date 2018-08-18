var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(array,element) {
  //add element to beginning of array 
  //return array without modifying original
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  //alters the original array that's passed in
  //modifies original array
  array.unshift(element);
  return array

}

function addElementToEndOfArray(array,element){
  //doesn't alter original array
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element){
  //alters original array
  array.push(element);
  return array
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  //removes first element and returns mutated array
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var slicedArray = array.slice(1)
  return slicedArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  //returns array with the last element 
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  //removes the last element from the array
  var end = array.length - 1
  var endSlicedArray = array.slice(0,end)
  return endSlicedArray
}