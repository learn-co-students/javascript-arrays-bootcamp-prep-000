var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//add a number to the front and return a new array
function addElementToBeginningOfArray(array, element){
  chocolateBars = [element, ...array]
  return chocolateBars
}

/*add a number to the begining and alter the original array
that is passed in as a parameter*/
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(`${element}`)
  return chocolateBars
  }
//function calls to add elements to the beginning of arrays
addElementToBeginningOfArray(chocolateBars, "twix")

destructivelyAddElementToBeginningOfArray(chocolateBars, "twix")

//add an element to the end and return a new array
function addElementToEndOfArray(array, element){
  chocolateBars = [...array, element]
  return chocolateBars
}

//add element to the end and alter the original array
function destructivelyAddElementToEndOfArray(array, element){
    array.push(`${element}`)
    return chocolateBars
}
//function calls to add element at the end of the array
addElementToEndOfArray(chocolateBars, "twix")

destructivelyAddElementToEndOfArray(chocolateBars, "twix")

//access an element in the area by passing in a value
function accessElementInArray(array, element){
  return(array[`${element}`])
}
//function call to access the array value
accessElementInArray(chocolateBars, 2)

//function to remove the first element from the array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

//function call to remove the first element from the array
destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

//remove the first element of the array without mutating the original array

function removeElementFromBeginningOfArray(array){
  chocolateBars = array.slice(1)
  return chocolateBars
}
//function call to remove the first element from the array
removeElementFromBeginningOfArray(chocolateBars)

//function to remove an element from the end of the array
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

//function call to remove an element from the end of the array
destructivelyRemoveElementFromEndOfArray(chocolateBars)

//function to remove the last element of the array eithout mutating the original array
function removeElementFromEndOfArray(array){
  var chocolateBars = array.slice(0, -1)
  return chocolateBars
}

//function call to remove the last element of the array
removeElementFromEndOfArray(chocolateBars)
