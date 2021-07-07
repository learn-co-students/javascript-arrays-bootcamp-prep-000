var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittle'
  ]
  
  // add to beginning of array
  function addElementToBeginningOfArray(array,element){
    var newArray = [element,...array];
    return newArray
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array
  }
  
  // add to end of array
  function addElementToEndOfArray(array, element){
    var newArray = [...array, element];
    return newArray

  }
  
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array    
}
  
  // remove from beginning of array
function removeElementFromBeginningOfArray(array){
  var newArray = array;
  return newArray.slice(1)
  }
  
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
  
}


  // remove from end of array
function removeElementFromEndOfArray(array){
  var newArray = array;
  return newArray.slice(0, newArray.length-1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(-1)
  return array
}
  
  // access array index
  function accessElementInArray(array, index) {
    return array[index]
}
  
  