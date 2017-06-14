var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array,element){
  return newArray =[element,...array];
}

function destructivelyAddElementToBeginingOfArray(array,element){
  return array.unshift(element);
}

function addElementToEndOfArray(array,element){
  return newArray =[...array,element];
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOFArray(array) {
  return array.slice(0, array.lenth -1)
}
