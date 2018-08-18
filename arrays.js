var chocolateBars = [
"snickers",
"hundred grand",
"kitkat",
"skittles"
];

function addElementToBeginningOfArray (array, element) {
var new_array = [array[0], element]
return  new_array;
}

function destructivelyAddElementToEndOfArray (array, element) {
 array.unshift(element)
return array;
}

function addElementToEndOfArray( array, element) {
  array = [... array, "newElement"]
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
array[3] = "new element"
return array;
}




function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
array = array.slice(3);
return array;
}

function destructivelyAddElementToEndOfArray(array) {
  array.push();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array;
}
