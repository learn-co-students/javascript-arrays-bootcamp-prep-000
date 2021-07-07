var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];


function addElementToBeginningOfArray (array, element){
  array= [element, ...array]; //this is not a function 
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift (element) ; //doesen't add elemnt when returning not a problem
  return array
} 

  function addElementToEndOfArray (array, element){
    array= [...array, element]; //not a function 
    return array
  }

function destructivelyAddElementToEndOfArray (array, element){
  array.push (element)
  return array
}

function accessElementInArray (array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array){
  array=array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop(1)
  return array
}

function removeElementFromEndOfArray (array){
  var n = array.length;
  array=array.slice(0, 2)
  return array
}

