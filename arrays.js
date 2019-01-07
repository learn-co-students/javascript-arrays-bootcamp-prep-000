var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, element){
    return [element, ...chocolateBars]
    //array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
 return array
}
function addElementToEndOfArray (array, element){
 return [...array, element]
}

function addElementToEndOfArray (array, element){
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}


function removeElementFromBeginningOfArray(array){
  return array.slice(1) //worked
}

function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
}
function removeElementFromEndofArray(array){
  return array.slice(0, array.length - 1)
}

/*

function removeElementFromEndofArray(array){
  
  return array.pop();
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}*/


/*
function addElementToBeginningOfArray(array, element){
 a= array.unshift(array)
  [element,...array]
  return a;
  
  
}
*/











