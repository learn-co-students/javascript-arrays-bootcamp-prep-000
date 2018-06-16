var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


/// adds new element to existing array at the beginning
function destructivelyAddElementToBeginningOfArray (array, element)

{
  
  array.unshift(element)
  return array

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

function accessElementInArray (array, index)

{
  return array[index]
  
}


function removeElementFromBeginningOfArray (array)

{
  
  var newArray = array.slice(1)
  return newArray
  
}

 
function removeElementFromEndOfArray (array)

{
  
  var newArray = array.slice(0,2)
  console.log(newArray[2])
  return newArray
  
}

const anArray = [1,2,3]
removeElementFromEndOfArray(anArray)
console.log(anArray[2])
