var chocolateBars = ['snickers','hundred grand','kit kat','skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
 return array.unshift(element)
}

function addElementToEndOfArray(array,element){
  var newArray = [...array,element];
  return newArray
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element)
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
    return newArray
}
function destructivelyRemoveElementFromEndOfArray(array1){
  array1.pop();
  return array1
}
function removeElementFromEndOfArray(array){
  newArray=array.slice(0,array.length - 1)
  return newArray
}