var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles",];


  
function addElementToBeginningOfArray(array, element) {
  return [element ,...array] 
  }
function destructivelyAddElementToBeginningOfArray(element, array) {
    return element.unshift(array);
    
  }
  
  
  
function addElementToEndOfArray(array, element) {
    return [ ...array, element]
  }
function destructivelyAddElementToEndOfArray(element, array) {
  return [element.push(array)]
  }
  
  
  
function accessElementInArray(index, element) {
    return console.log(element, index)
  }




function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift()
  }
function removeElementFromBeginningOfArray(array) {
    return array.slice(1)
   
 }
   


function destructivelyRemoveElementFromEndOfArray(array) {
      return array.pop(1)
  }
    
function RemoveElementFromEndOfArray(array) {
    return array.slice(0,array.length - 1 )
  }


  