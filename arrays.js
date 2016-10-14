var chocolateBars = [
  'snickers' ,
  'hundred grand' ,
  'kitkat' ,
  'skittles' ,
]

function addElementToBeginningOfArray(array, element) {
  array1 = [element, ...array];
  return array1;
}

//function destructivelyAddElementToBeginningOfArray(array, element) {
//  array1 = [element, ...array];
//  return array1;
//}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
 }

function addElementToEndOfArray(array, element)  {
  array = [...array, element];
  return array;
}

 function destructivelyAddElementToEndOfArray(array, element)  {
   array.push(element);
   return array;
 }

function accessElementInArray(array, index)  {
  return array [index];
}

function removeElementFromBeginningOfArray(array) {
array1 = array.slice(1);
return array1;
  }

function removeElementFromEndOfArray(array)  {
  array.pop();
  return array;
}
