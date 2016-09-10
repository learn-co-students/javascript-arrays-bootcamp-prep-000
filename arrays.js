var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


/* both f(x) should add element to beginning of array
+ return whole array
1. not modify original and return new array
   use .UNSHIFT or spread operator (...)?*/

function addElementToBeginningOfArray(array, element){
  return [element,...array];
}

//2. SHOULD alter original array that is passed
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

/* 1. should NOT alter original array*/
function addElementToEndOfArray(array, element){
 return [...array,element]

}
// 2. SHOULD alter original
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}
