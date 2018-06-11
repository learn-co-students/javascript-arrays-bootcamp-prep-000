//variable for a candy bar
{var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

//not modify, but return new array
function addElementToBeginningOfArray(array, element) {

var numbersequence = ["2", "3", "4"]

//should add 1 to beginning of array without modifying the original
return [element, ...array];
}

//modifying the original array
function destructivelyAddElementToBeginningOfArray(array, element) {

//should add 1 to beggining of array by modifying the original
array.unshift(element)

return array
}

//add to end without modifying
function addElementToEndOfArray(array, element) {

//modify without changing
return [...array, element];
}

//modify while changing
function destructivelyAddElementToEndOfArray(array, element) {

//add element at end while modifying original array
array.push(element)

return array
}

function accessElementInArray(array, index) {

return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {


array.shift(element)

return array
}

function removeElementFromBeginningOfArray(array, element) {

return array.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  
 array.pop()
  
  return array
}

function removeElementFromEndOfArray(array, element) {
 
  return array.slice(0, array.length -1)
  
}

