var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars

var array = [1,2,3]

function addElementToBeginningOfArray(array, element){
var newArray = [element, array[0] ]
return newArray
}
addElementToBeginningOfArray

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element){

  return [...array,element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
return  array[2]

}

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray (array){
return array.slice(1);

}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (){
array.splice(-1)
return array
}
