/* Creates a literal array */
var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
/*Add an element to the beginning of the array and returns it whitoud mofifying it, by means of the spread operator ...*/
function addElementToBeginningOfArray(array,element){
  return [element,...array]
}

/* Add an element to the array mutating it */
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

/*Add an element to the end of the array, does not mutate array */
function addElementToEndOfArray(array,element){
  return [...array,element]

}

/*Add an element to the end of the array, but changes the original array*/
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array

}

/* returns the element in the array which correspond to the index provided in the arguments */
function accessElementInArray(array,index){
  return array[index]
}

/* Removes the first element of a array, mutating the array */
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

/* Slices array, leaving out first element, does not mutate the original array */
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

/*Removes the last element of the array, and changes it */
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

/*Removes the last element of the array without mutating it*/
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length -1)
}
