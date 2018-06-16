var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


/// adds new element to existing array at the beginning
function destructivelyAddElementToBeginningOfArray (array, element)

{
  
  
  return array.unshift(element)

}
 array = [1]
destructivelyAddElementToBeginningOfArray(array, 'foo')

/// adds new element to existing array at the end
function destructivelyAddElementToEndOfArray (array, element)

{
  
  
  array.push(element)
  return array
  
}


/// adds new element without changing original at beginning
function addElementToBeginningOfArray (array,element)

{
  
var newArray; 
newArray = [element, ...array];
return newArray
  
}
myArr = [1]
addElementToBeginningOfArray(myArr, 'foo')

/// adds new element without changing original at end
function addElementToEndOfArray (array, element)

{
  
  var newArray;
  newArray = [...array, element];
  return newArray
  
}


function destructivelyRemoveElementFromBeginningOfArray(array)

{
  
  array.shift()
  return array
  
}


function destructivelyRemoveElementFromEndOfArray (array)

{
  
  array.pop()
  return array
  
}

function accessElementInArray ()

{
  
  
}


function removeElementFromBeginningOfArray (array)

{
  
  var newArray = array;
  newArray.shift();
  return newArray
  
}

function removeElementFromEndOfArray (array)

{
  
  var newArray = array;
  newArray.pop()
  return newArray
  
}
