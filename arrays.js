var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementsToBeginningOfArray(array, ele){
  return [ele, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, ele){
  return chocolateBars.unshift(ele);
}

function addElementToEndOfArray (array, ele) {
  return [...chocolateBars,'ele'];
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.push('ele');
}

function accessElementInArray (array, index){

}

function destructivelyRemoveElementFromBeginningOfArray (array){
 return array.shift();
}

function removeElementFromBeginningOfArray (array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (array){
  return array.pop();
}

function removeElementFromEndOfArray (array){
  array.slice(0, array.length-1);
}





