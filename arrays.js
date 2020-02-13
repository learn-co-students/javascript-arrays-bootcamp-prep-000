var chocolateBars = [ "snickers", "hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray( array,element)
{
 
 return (array= [element,...array]);

}

function destructivelyAddElementToBeginningOfArray( array,element)
{
array.unshift(element)
 return array
}
function addElementToEndOfArray(array, element) 
{
 array= [...array,element];
 return array
 
}
function destructivelyAddElementToEndOfArray( array,element)
{
 array.push(element)
 return array
}

function accessElementInArray(array, index)
{
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
   array.shift()
   return array
  
}
function removeElementFromBeginningOfArray(array)
{
   return array.slice(1)
  
}
function destructivelyRemoveElementFromEndOfArray(array)
{
   array.pop()
   return array
}

function removeElementFromEndOfArray(array)
{
 //return  [...array.slice(0,array.length-1)]
 return array.slice(0,array.length-1)
}

