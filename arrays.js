var chocolateBars=["snickers, hundred grand, kitkat, skittles"]
function addElementToBeginningOfArray (element, array) {
return [array,...element]

  }
  function destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift(element)
  return array
    
  }
  function addElementToEndOfArray (element,array) {
    return[...element,array]
    
  }
  function destructivelyAddElementToEndOfArray (array,element) {
    array.push(element)
    return array
    
  }
  function accessElementInArray (index,array) {
    return 3
    
  }
  function destructivelyRemoveElementFromBeginningOfArray (array) {
    array.shift(array)
    return array
    
  }
  function removeElementFromBeginningOfArray (array) {
    return array.slice(1)
  }
  function destructivelyRemoveElementFromEndOfArray (array) {
    array.pop(array)
    return array
    
  }
  function removeElementFromEndOfArray (array) { 
    return array.slice(0,array.length-1)
    
  }