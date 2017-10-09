var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, n){
  newarray = [n, ...array];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, n){
  array.unshift(n);
  return array
}

function addElementToEndOfArray(array, n){
  newarray = [...array, n];
  return newarray
}

function destructivelyAddElementToEndOfArray(array, n){
  array.push(n);
  return array
}

function accessElementInArray(array, idx){
  return array[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
