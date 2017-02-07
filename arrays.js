var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function   addElementToBeginningOfArray(array, element)  {
  return [element, ...array]
}

function   destructivelyAddElementToBeginningOfArray(array, element)  {
    array.unshift(element)
    return array;
}

function   addElementToEndOfArray(array, element) {
  array.push(element)
  return array;
  }

function   destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array;
}

function accessElementInArray(array,index){
  return array[index];
}
function removeElementFromBeginningOfArray(array){
return array.slice(1)

}

function removeElementFromEndOfArray(array,index){
array.pop(index)
return array;
  
}
