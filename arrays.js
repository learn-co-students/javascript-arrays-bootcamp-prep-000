var chocolateBars = ["snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
  function addElementToBeginningOfArray(array, element){
  return [element, ...array]
  
  } 
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    
    return array
  }
  
  function addEelementToEndOfArray (array, element){
    array.push(element)
    return array
    
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    return [...array, element]
  }