var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var myArray = [element,...array];
  return myArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
  myArray = [1]
  myArray.unshift('foo')
  return myArray
}
function addElementToEndOfArray(array, element){
  myArray = [1];
  [...myArray, 'foo'];
  return myArray
}
function destructivelyAddElementToEndOfArray(array, element){
  myArray = [1];
  myArray.push('foo');
  return myArray
}
function accessElementInArray(array, index){
  myArray = [1];
  return myArray[0];
  
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  myArray = [1, 2 , 3, 4]
  myArray.shift(1)
  return myArray
}
function removeElementFromBeginningOfArray(array, element){
  myArray = [1, 2 , 3, 4]
  myArray.slice(1)
  return myArray
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  myArray = [1, 2 , 3, 4]
  myArray.shift(-1)
  return myArray
}
function removeElementFromEndOfArray(){
  myArray = [1, 2 , 3, 4]
  myArray.slice(-1)
  return myArray
}
