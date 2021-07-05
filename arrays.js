var chocolateBars = [
  `snickers`,
  `hundred grand`,
  `kitkat`,
  `skittles`
]

function addElementToBeginningOfArray(array,e) {
  var newArray = [e,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,e) {
  array.unshift(e);
  return array
}

function addElementToEndOfArray(array,e) {
  var newArray = [...array,e];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,e) {
  array.push(e);
  return array
}

function accessElementInArray(array,e) {
  return array[e];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

 function removeElementFromBeginningOfArray(array) {
   return array.slice(1);
 }

 function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop();
   return array;
 }

 function removeElementFromEndOfArray(array) {
   return array.splice(0,array.length-1);
 }
