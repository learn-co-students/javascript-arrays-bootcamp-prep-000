var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  function addElementToBeginningOfArray(array, element) {
    
    var newArray = [element, ...array]
    
    return newArray
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    
   array.unshift(element)
   return array
    
  }
  
  function addElementToEndOfArray(array, element) {
    
    var changedArray = [...array, element]
    
    return changedArray
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    
    array.push(element)
    return array
  }
  
  function accessElementInArray(array, index) {
    return array[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    
    array.shift()
    return array
  
  }
  
  function removeElementFromBeginningOfArray(array) {
    var removed = array.slice(1)
    return removed
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
  }
  
  function removeElementFromEndOfArray(array) {
    var removed = array.slice(0, array.length - 1)
    return removed 
  }