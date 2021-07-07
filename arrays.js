var chocolateBars = ["snickers, hundred grand, kitkat, skittles"];

var array = [1]
var element = ['foo']


function addElementToBeginningOfArray(array, element){
  return [element, ...array];
 
}

function destructivelyAddElementToBeginningOfArray(array, element){
     
    array.unshift(element)
    return array
}

function addElementToEndOfArray(array, element){
  return [...array, element];
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
    return array
  
} 

function accessElementInArray (array, index) {
  var array = [1, 2, 3];
  var index = 2;
  
    return array[2]
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
    return array

}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
 
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
  
}

