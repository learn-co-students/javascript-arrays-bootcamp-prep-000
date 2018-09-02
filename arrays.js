var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {return [element, ...array] }
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array 
  }
  
function addElementToEndOfArray(array, element) {choco = [...array, element]
return choco }

function destructivelyAddElementToEndOfArray(array, element) {array.push(element)
   return array
  
}

function accessElementInArray(array, index) {return (array[index])}

function destructivelyRemoveElementFromBeginningOfArray(array, element) 
{ array.shift(element) 
return array}

function removeElementFromBeginningOfArray(array) 
{chocolates = array.slice(1) 
return chocolates
  
}

function destructivelyRemoveElementFromEndOfArray(array) { array.pop() 
return array}
function removeElementFromEndOfArray(array) 
{ 
 chocolate = array.slice(0, array.length - 1) 
  return chocolate 
  
}