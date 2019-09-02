chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  
var yup = [element, ...array];

return yup
  
}


function destructivelyAddElementToBeginningOfArray(array, element){
  
array.unshift(element)

return array

}


function addElementToEndOfArray(array,element){
  
var geeze=[...array, element]  ;

return geeze
  
}

function destructivelyAddElementToEndOfArray(array,element){
  
array.push(element);

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
  
var grr = array.slice(1)

return grr
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  
array.pop();

return array
  
}

function removeElementFromEndOfArray(array){
  
var lol = array.slice(0,array.length-1)  

return lol
}

