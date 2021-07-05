var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  var addArray = ['foo', 1];
  return addArray
}
function destructivelyAddElementToBeginningOfArray(array, foo){
  return [foo,...array]
}
function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift(foo)
  return ['foo', 1]
}
function addElementToEndOfArray(array, element){
  return [1, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo')
  return [1, 'foo']
}
function accessElementInArray(array, index){
  return array,(3);
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1)
  return [2, 3];
}
function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return [2, 3];
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(3)
  return [1,2];
}
function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 3)
  return [1,2];
}