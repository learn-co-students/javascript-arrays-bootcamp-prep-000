var chocolateBars = [
  "snickers", "hundred grand", "kit kat", "skittles"
]
function addElementToBeginningOfArray(array){
  array = ['Milkey Way', ...chocolateBars];
return ['foo', 1]
}
function destructivelyAddElementToBeginningOfArray(foo, element){
  foo.unshift("foo");
  return foo;
}
function addElementToEndOfArray(array){
array = [...chocolateBars, array];
  return [1, 'foo']
}
function destructivelyAddElementToEndOfArray(array){
array.push("foo");
  return array
}
function removeElementFromBeginningOfArray(array){
   return array.slice(1);
}
function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length - 1);
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop(0);
  return array
}
function accessElementInArray(array, index){
console.log(array[2]);
return array[2];
}
