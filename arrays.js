let chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]


function addElementToBeginningOfArray(array, el){
  let newArray = [el, ...array];
  return newArray;
}


function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el);
  return array;
}


function addElementToEndOfArray(array, el) {
  let newArray = [...array, el];
  return newArray;
}


function destructivelyAddElementToEndOfArray(array, el){
  array.push(el);
  return array;
}


function accessElementInArray(array, index) {
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}


function removeElementFromBeginningOfArray(array) {
  let newArray = array.slice(1);
  return newArray;
}


function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}


function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
}
