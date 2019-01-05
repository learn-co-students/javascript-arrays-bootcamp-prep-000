var chocolateBars =  ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element)

function destructivelyAddElementToBeginningOfArray(array, element)

function addElementToEndOfArray(array, element)

function destructivelyAddElementToEndOfArray(array, element)

function accessElementInArray(array, index) 
  {
    return [index]
  }
  
function destructivelyRemoveElementsFromBeginningOfArray(array)
  {
    array.shift()
  }
 
 function removeElementFromBeginningOfArray(array)
   {
     array.slice(0)
    }
 
 function destructivelyRemoveElementsFromEndOfArr(array)
   {
     array.pop()
   }

 function removeElementFromEndOfArray(array)
   {
     array.slice(0, array.length - 1)
   }
