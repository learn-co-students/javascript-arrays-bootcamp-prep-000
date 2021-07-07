var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray (chocolateBars, candy){
    return [candy, ... chocolateBars];
}

  function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
  chocolateBars.unshift(candy)
  return chocolateBars
}

  function addElementToEndOfArray(chocolateBars, candy){
    return [...chocolateBars, candy];
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, candy){
     chocolateBars.push(candy)
     return chocolateBars
  }
  
  function accessElementInArray(array ,index) {
    return array[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift()
    return array;
  }
  
  function removeElementFromBeginningOfArray(array){
    return array.slice(1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop()
    return array
  }
  function removeElementFromEndOfArray(array){
    return array.slice(0, array.length -1)
  }