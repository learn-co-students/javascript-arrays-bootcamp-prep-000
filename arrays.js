chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,index){
  var newarray = ["foo",...array];
  return newarray;
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array,index){
  var newarray = [...array,"foo"];
  return newarray
}
function destructivelyAddElementToEndOfArray(array,index){
  array.push(index)
  return array ;
}

function accessElementInArray(array,index){
  return array[index]
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
function removeElementFromEndOfArray (array){
   
   return array.slice(0,array.length-1)
}