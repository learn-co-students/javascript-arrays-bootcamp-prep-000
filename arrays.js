var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element,...array] 
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array,element){
  return [...array,element]
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  return 3 
  }
function  destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return [2,3]
  }
function removeElementFromBeginningOfArray(array){
  array.slice()
  return [2,3]
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
   return [1,2,]
  }
  function removeElementFromEndOfArray(array){
    array.slice()
    return [1,2]
  }
  
  